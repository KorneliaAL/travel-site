export default function Destination() {
	localStorage.clear();
	localStorage.setItem('Country', 'japan');

	let currentIndex = 0;
	let price = '';
	let travelDays = '';
	let text = '';
	let header = '';

	const destinationContainer = document.querySelector('.destination');
	const countryButton = document.querySelectorAll('.destination__country-button');
	const countrySlideshows = document.querySelectorAll('.destination__slideshow');
	const countryPrice = document.querySelector('#price');
	const countryTravelDays = document.querySelector('#travel-days');
	const countryHeader = document.querySelector('.destination__header');
	const countryText = document.querySelector('.destination__text');

	if (destinationContainer) {
		for (let index = 0; index < countryButton.length; index += 1) {
			countryButton[index].addEventListener('click', event => {
				handleCountryButtonClick(event);
			})
		}
		getCountryInfo();
		renderHTML();
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
				header = 'japan';
				text = 'I Japan finner du kremen av Asia, med noen av kontinentets største severdigheter og helligdommer,fantastiske og meget varierte landskaper og hager, høyteknologi i særklasse og store gastronomiskeopplevelser.';
				break;

			case 'laos':
				price = '20.000';
				travelDays = '12';
				header = 'laos';
				text = 'En reise til Laos er en reise til et helt spesielt asiatisk land. Her møter du det tradisjonelle Asia, med eventyrlige landskaper og mangfoldige befolkningsgrupper som utstråler en verdig stilhet og er utrolig gjestfrie.'
				break;

			case 'maldives':
				price = '35.000';
				travelDays = '16';
				header = 'maldives';
				text = 'Utforsk livet under vann med dykkermaske og snorkel – eller bli liggende under en palme på stranda.'
				break;

			case 'cambodia':
				price = '21.000'
				travelDays = '12';
				header = 'cambodia';
				text = 'Kambodsjas nyere og eldre historie avspeiler seg i landets severdigheter, og de er blant verdens største. På en reise til Kambodsja får du oppleve myteomspunne ruiner & kulturskatter, kolonitidens flotte bygninger og et gjestfritt folkeferd.'
			default:
				break;
		}
	}

	function renderHTML() {
		for (const slideshow of countrySlideshows) {
			slideshow.classList.remove('destination__slideshow--visible');
		}
		countrySlideshows[currentIndex].classList.add('destination__slideshow--visible');

		for (const button of countryButton) {
			button.classList.remove('destination__country-button--active');
		}
		countryButton[currentIndex].classList.add('destination__country-button--active')

		countryPrice.innerHTML = `${price}`;
		countryTravelDays.innerHTML = `${travelDays}`;
		countryHeader.innerHTML = `${header}`;
		countryText.innerHTML = `${text}`;
	}
}