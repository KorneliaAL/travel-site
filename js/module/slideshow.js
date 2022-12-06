/**
 * 
 * @param {object} slideshowContainer 
 */
export default function Slideshow(slideshowContainer) {
	console.log(typeof slideshowContainer);
	// Data
	let slideIndex = 0;

	// Variables
	const slideshowSlides = slideshowContainer.querySelectorAll('.destination__slide');
	const slideDots = slideshowContainer.querySelectorAll('.destination__dots');
	const buttonPrevious = slideshowContainer.querySelectorAll('.destination__button-previous');
	const buttonNext = slideshowContainer.querySelectorAll('.destination__button-next');

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
		
		window.addEventListener('keyup', handleWindowKeyUp)
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
		const dotIndex = event.currentTarget.dataset.index;
		
		setIndex(dotIndex);
		renderHTML();
	}

	/**
	 * Goes to next and previous slide, by using arrow left and arrow right.
	 * @param {object} event 
	 */
	function handleWindowKeyUp(event) {
		const key = event.key;
		if (key === 'ArrowRight') {
			increaseIndex();
			renderHTML();
		}else if (key === 'ArrowLeft') {
			decreaseIndex();
			renderHTML();
		}
	}

	function setIndex(dotIndex) {
		slideIndex = dotIndex;
	}
	
	/**
	 * Decreases index of image array by 1. 
	 * @returns previouse image/slide.
	 */
	function decreaseIndex() {
		if (slideIndex === 0) {
			slideIndex = slideshowSlides.length - 1;
		} else {
			slideIndex -= 1;
		}
	}


	/**
	 * Increases index of image array by 1.
	 * @returns next image/slide.
	 */
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