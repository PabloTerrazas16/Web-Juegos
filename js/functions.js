function actualizarNavbarUsuario() {
	const navbarUser = document.getElementById('navbar-user');
	if (!navbarUser) return;

	const userEmail = localStorage.getItem('loggedUserEmail');
	if (userEmail) {
		const user = (window.validUsers || []).find(u => u.email === userEmail);
		if (user) {
			navbarUser.innerHTML = `
				<div style="position:relative;">
					<img src="${user.profilePic}" alt="${user.username}" id="profile-pic" class="rounded-circle shadow" style="width:56px; height:56px; object-fit:cover; cursor:pointer; margin-right:10px; border:2px solid #fff;">
					<div id="dropdown-menu" style="display:none; position:absolute; right:0; top:60px; background:#fff; color:#222; border-radius:10px; box-shadow:0 4px 16px rgba(0,0,0,0.18); min-width:220px; z-index:100; padding:16px 12px;">
						<div style="text-align:center; margin-bottom:12px;">
							<img src="${user.profilePic}" alt="${user.username}" class="rounded-circle" style="width:48px; height:48px; object-fit:cover; margin-bottom:8px; border:1px solid #eee;">
							<div style="font-weight:bold; font-size:1.1em;">${user.username}</div>
							<div style="font-size:0.95em; color:#555;">${user.email}</div>
						</div>
						<button id="logout-btn" style="width:100%; background:#f5f5f5; border:none; padding:10px; cursor:pointer; color:#222; border-radius:6px; font-weight:bold;">Cerrar sesión</button>
					</div>
				</div>
			`;
			setTimeout(() => {
				const pic = document.getElementById('profile-pic');
				const menu = document.getElementById('dropdown-menu');
				const logoutBtn = document.getElementById('logout-btn');
				if (pic && menu) {
					pic.onclick = (e) => {
						menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
					};
					document.addEventListener('click', (e) => {
						if (!pic.contains(e.target) && !menu.contains(e.target)) {
							menu.style.display = 'none';
						}
					});
				}
				if (logoutBtn) {
					logoutBtn.onclick = () => {
						localStorage.removeItem('loggedUserEmail');
						location.reload();
					};
				}
			}, 100);
			return;
		}
	}
	navbarUser.innerHTML = '<a href="html/login.html" class="btn btn-primary">Inicia sesión ahora</a>';
}

window.addEventListener('DOMContentLoaded', actualizarNavbarUsuario);











