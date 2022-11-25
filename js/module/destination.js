let country = 'japan';
export function currentCountry() {
	return country;
}

export function Destination() {
	localStorage.clear();
	localStorage.setItem('Country', 'japan')
	let currentIndex = 0;
	let price = '';
	let travelDays = '';

	const countryButton = document.querySelectorAll('.destination__country-button');
	const countrySlideshows = document.querySelectorAll('.destination__slideshow');
	const countryDescriptions = document.querySelectorAll('.destination__description');
	const countryPrice = document.querySelector('#price');
	const countryTravelDays = document.querySelector('#travel-days')

	for (let index = 0; index < countryButton.length; index += 1) {
		countryButton[index].addEventListener('click', event => {
			handleCountryButtonClick(event);
		})
	}

	function handleCountryButtonClick(event) {
		currentIndex = event.currentTarget.dataset.index;
		localStorage.setItem('Country', event.currentTarget.dataset.country);
		getCountryInfo();
		renderHTML();
	}

	function getCountryInfo() {
		let currentCountry = localStorage.getItem('Country');
		switch (currentCountry) {
			case 'japan':
				price = '24.000';
				travelDays = '14';
				break;

			case 'laos':
				price = '20.000';
				travelDays = '12';
				break;

			case 'maldives':
				price = '35.000';
				travelDays = '16';
				break;

			case 'cambodia':
				price = '21.000'
				travelDays = '12';
			default:
				break;
		}
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

		countryPrice.innerHTML = `${price}`;
		countryTravelDays.innerHTML = `${travelDays}`;
	}
}