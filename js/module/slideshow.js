export default function Slideshow(currentCountry) {
	// Data
	let slideIndex = 0;
	let slideShow;
	let slideDots;

	/**
	 * @todo debug the dots, and decrease button. The dots sometimes skip one. The previous button dont show the last img, 
	 * and the dots can only be pushed at japan. Need to export handleSlideDotsClick(); to destination.js?
	 */

	// Variables
	const buttonPrevious = document.querySelectorAll('.destination__button-previous');
	const buttonNext = document.querySelectorAll('.destination__button-next');
	const imageSlidesJapan = document.querySelectorAll('.destination__slide-japan');
	const imageSlidesLaos = document.querySelectorAll('.destination__slide-laos');
	const imageSlidesMaldives = document.querySelectorAll('.destination__slide-maldives');
	const imageSlidesCambodia = document.querySelectorAll('.destination__slide-cambodia')
	const slideDotsJapan = document.querySelectorAll('.destination__dots-japan');
	const slideDotsLaos = document.querySelectorAll('.destination__dots-laos');
	const slideDotsMaldives = document.querySelectorAll('.destination__dots-maldives');
	const slideDotsCambodia = document.querySelectorAll('.destination__dots-cambodia');

	getCurrentSlideshow();
	// Event listeners
	buttonNext.forEach(button => {
		button.addEventListener('click', handleButtonNextClick);
	})

	buttonPrevious.forEach(button => {
		button.addEventListener('click', handleButtonPreviousClick);
	})

	slideDots.forEach((dot) => {
		dot.addEventListener('click', handleSlideDotsClick)

	})
	// Event handlers
	function handleButtonPreviousClick() {
		getCurrentSlideshow();
		decreaseIndex();
		renderHTML();
	}

	function handleButtonNextClick() {
		getCurrentSlideshow();
		increaseIndex();
		renderHTML();
	}

	// Methods
	/**
	 * Shows different slideshows, depending on which country selectet. Gets current country
	 * by importing data from destination.js. 
	 * @example clicked(japan) returns imageSlidesJapan and slideDotsJapan
	 */
	function getCurrentSlideshow() {
		let currentCountry = localStorage.getItem('Country');
		switch (currentCountry) {
			case 'japan':
				slideShow = imageSlidesJapan;
				slideDots = slideDotsJapan;
				break;

			case 'laos':
				slideShow = imageSlidesLaos;
				slideDots = slideDotsLaos;
				break;

			case 'maldives':
				slideShow = imageSlidesMaldives;
				slideDots = slideDotsMaldives;
				break;

			case 'cambodia':
				slideShow = imageSlidesCambodia;
				slideDots = slideDotsCambodia;
		}

	}
	/**
	 * Changes the slideIndex to data-index and calls renderHTML
	 * @param {*} event 
	 */
	function handleSlideDotsClick(event) {

		slideIndex = event.currentTarget.dataset.index;
		renderHTML();
	}

	function decreaseIndex() {
		if (slideIndex === 0) {
			slideIndex = slideShow.length - 1;
		}
		slideIndex -= 1;
	}

	function increaseIndex() {
		slideIndex += 1;
		if (slideIndex > slideShow.length - 1) {
			slideIndex = 0;
		}
	}

	// Render
	function renderHTML() {
		for (const slide of slideShow) {
			slide.classList.remove('destination__slide--visible');
		}
		slideShow[slideIndex].classList.add('destination__slide--visible');

		for (const dot of slideDots) {
			dot.classList.remove('destination__dots--active');
		}
		slideDots[slideIndex].classList.add('destination__dots--active');
	}
}