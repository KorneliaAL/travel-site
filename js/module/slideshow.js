export default function Slideshow() {
	let slideIndex = 0;

	const buttonPrevious = document.querySelector('.destination__button-previous');
	const buttonNext = document.querySelector('.destination__button-next');
	const imageSlides = document.querySelectorAll('.destination__slide');
	const slideDots = document.querySelectorAll('.destination__dots');

	buttonPrevious.addEventListener('click', handleButtonPreviousClick);
	buttonNext.addEventListener('click', handleButtonNextClick);

	for (let index = 0; index < slideDots.length; index += 1) {
		slideDots[index].addEventListener('click', event => {
			handleSlideDotsClick(event, index);
		})
	}

	
	function handleButtonPreviousClick(event) {
		decreaseIndex();
		renderHTML();
	}

	function handleButtonNextClick(event) {
		increaseIndex();
		renderHTML();
	}

	function handleSlideDotsClick(event, index) {
		slideIndex = index;
		renderHTML();
	}

	function decreaseIndex() {
		if (slideIndex === 0) {
			slideIndex = imageSlides.length - 1;
		}
		slideIndex -= 1;
	}

	function increaseIndex() {
		slideIndex += 1;
		if (slideIndex > imageSlides.length - 1) {
			slideIndex = 0;
		}
	}

	function renderHTML() {
		for (const slide of imageSlides) {
			slide.classList.remove('destination__slide--visible');
		}
		imageSlides[slideIndex].classList.add('destination__slide--visible');

		for (const dot of slideDots) {
			dot.classList.remove('destination__dots--active');
		}
		slideDots[slideIndex].classList.add('destination__dots--active');
	}
}