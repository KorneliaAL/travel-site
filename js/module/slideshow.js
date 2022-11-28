export default function Slideshow(slideshowContainer) {
	console.log(slideshowContainer);

	// Data
	let slideIndex = 0;
	// let slideShow;
	let slideshowVisible = 'japan';

	/**
	 * @todo debug the dots, and decrease button. The dots sometimes skip one. The previous button dont show the last img, 
	 * and the dots can only be clicked at japan.
	 */

	// Variables
	const slideshowSlides = slideshowContainer.querySelectorAll('.destination__slide');
	const slideDots = slideshowContainer.querySelectorAll('.destination__dots');
	const buttonPrevious = slideshowContainer.querySelectorAll('.destination__button-previous');
	const buttonNext = slideshowContainer.querySelectorAll('.destination__button-next');
	console.log(slideshowContainer);

	// Event listeners
	if (slideshowContainer) {
		buttonNext.forEach(button => {
			button.addEventListener('click', handleButtonNextClick);
		});

		buttonPrevious.forEach(button => {
			button.addEventListener('click', handleButtonPreviousClick);
		});

		slideDots.forEach((dot) => {
			dot.addEventListener('click', handleSlideDotsClick)
		});
	}

	// Event handlers
	function handleButtonPreviousClick() {
		decreaseIndex();
		renderHTML();
	}

	function handleButtonNextClick() {
		increaseIndex();
		renderHTML();
	}

	// Methods
	function handleSlideDotsClick(event) {

		slideIndex = event.currentTarget.dataset.index;
		renderHTML();
	}

	function decreaseIndex() {
		if (slideIndex === 0) {
			slideIndex = slideshowSlides.length - 1;
		} else {
			slideIndex -= 1;
		}
	}

	function increaseIndex() {
		slideIndex += 1;
		if (slideIndex > slideshowSlides.length - 1) {
			slideIndex = 0;
		}
	}

	// Render
	function renderHTML() {
		for (const slide of slideshowSlides) {
			slide.classList.remove('destination__slide--visible');
		}
		slideshowSlides[slideIndex].classList.add('destination__slide--visible');

		for (const dot of slideDots) {
			dot.classList.remove('destination__dots--active');
		}
		slideDots[slideIndex].classList.add('destination__dots--active');
	}

	renderHTML();
}