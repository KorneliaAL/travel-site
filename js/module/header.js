export default function Header() {
	let navigationVisible = false;

	const headerNavigation = document.querySelector('.header__navigation');
	const headerButtonMenu = document.querySelector('.header__button-menu');
	const navigationButtonText = document.querySelector('.visually-hidden');

	headerButtonMenu.addEventListener('click', handleHeaderButtonMenuClick);

	function handleHeaderButtonMenuClick(event) {
		toggleNavigation();
		renderHTML();
	}

	function toggleNavigation() {
		navigationVisible = !navigationVisible;
	}

	function renderHTML() {
		if (navigationVisible === true) {
			headerNavigation.classList.add('header__navigation--visible');
			headerButtonMenu.style.backgroundImage = 'url(../../assets/icons/exit.svg)';
			navigationButtonText.setAttribute('aria-label', 'Lukk');

		} else {
			headerNavigation.classList.remove('header__navigation--visible');
			headerButtonMenu.style.backgroundImage = 'url(../../assets/icons/menu.svg)';
			navigationButtonText.setAttribute('aria-label', 'Meny');
		}
	}
}