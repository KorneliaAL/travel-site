let country = 'japan';
export function currentCountry() {
	return country;
}

export function Destination() {
	localStorage.clear();
	localStorage.setItem('Country', 'japan')
	let currentIndex = 0;

	const countryArticles = document.querySelectorAll('.destination__country');
	const countryButton = document.querySelectorAll('.destination__country-button');

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
		for (const article of countryArticles) {
			article.classList.remove('destination__country--visible');
		}
		countryArticles[currentIndex].classList.add('destination__country--visible');

	}
}