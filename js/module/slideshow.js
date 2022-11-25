export default function Slideshow(currentCountry) {
	let slideIndex = 0;
	let slideShow;
	let slideDots;

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
	console.log(slideShow)
	buttonNext.forEach(button => {
		button.addEventListener('click', handleButtonNextClick);
	})

	buttonPrevious.forEach(button => {
		button.addEventListener('click', handleButtonPreviousClick);
	})

	slideDots.forEach((dot) => {
		dot.addEventListener('click', handleSlideDotsClick)

	})

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