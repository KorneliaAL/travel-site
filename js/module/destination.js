let country = 'japan';
export function currentCountry() {
	return country;
}

export function Destination() {
	localStorage.clear();
	localStorage.setItem('Country', 'japan')
	let currentIndex = 0;

	const countryButton = document.querySelectorAll('.destination__country-button');
	const countrySlideshows = document.querySelectorAll('.destination__slideshow');
	const countryDescriptions = document.querySelectorAll('.destination__description');

	for (let index = 0; index < countryButton.length; index += 1) {
		countryButton[index].addEventListener('click', event => {
			handleCountryButtonClick(event);
		})
	}

	function handleCountryButtonClick(event) {
		currentIndex = event.currentTarget.dataset.index;
		renderHTML();
		localStorage.setItem('Country', event.currentTarget.dataset.country)
	}

	function renderHTML() {
		for (const description of countryDescriptions) {
			description.classList.remove('destination__description--visible');
		}
		countryDescriptions[currentIndex].classList.add('destination__description--visible');

		for (const slideshow of countrySlideshows) {
			slideshow.classList.remove('destination__slideshow--visible');
		}
		countrySlideshows[currentIndex].classList.add('destination__slideshow--visible');
	}
}