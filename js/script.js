document.addEventListener('DOMContentLoaded', function () {
	const menuHamburguesa = document.getElementById('menu-hamburguesa');
	const menuAside = document.getElementById('menu-aside');

	menuHamburguesa.addEventListener('click', function () {
			menuHamburguesa.classList.toggle('open');
			menuAside.style.display = (menuHamburguesa.classList.contains('open')) ? 'block' : 'none';
	});

	window.addEventListener('resize', function () {
			if (window.innerWidth > 768) {
					menuHamburguesa.classList.remove('open');
					menuAside.style.display = 'block';
			} else {
					menuAside.style.display = (menuHamburguesa.classList.contains('open')) ? 'block' : 'none';
			}
	});
});
