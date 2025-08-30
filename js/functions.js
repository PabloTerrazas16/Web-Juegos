// Muestra en la navbar la foto de perfil si el usuario está logeado, o el mensaje si no
function actualizarNavbarUsuario() {
	const navbarUser = document.getElementById('navbar-user');
	if (!navbarUser) return;

	const userEmail = localStorage.getItem('loggedUserEmail');
	if (userEmail) {
		const user = (window.validUsers || []).find(u => u.email === userEmail);
		if (user) {
			navbarUser.innerHTML = `
				<div style="position:relative;">
					<img src="${user.profilePic}" alt="${user.username}" class="profile-pic" id="profile-pic" style="cursor:pointer;">
					<div id="dropdown-menu" style="display:none; position:absolute; right:0; top:45px; background:#fff; color:#222; border-radius:6px; box-shadow:0 2px 8px rgba(0,0,0,0.15); min-width:120px; z-index:100;">
						<button id="logout-btn" style="width:100%; background:none; border:none; padding:10px; cursor:pointer; color:#222;">Cerrar sesión</button>
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
/* En este archivo van las funciones principales de la web, para cosas menores o especificas, favor crear otro archivo */











