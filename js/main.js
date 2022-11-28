import Header from './module/header.js';
import Slideshow from './module/slideshow.js';
import Destination from './module/destination.js';
// import Packinglist from './module/packinglist.js'

const destination = document.querySelector('.destination');
// const packinglist = document.querySelector('.packinglist');

Header();
Destination();
for (const slideshowContainer of document.querySelectorAll('.destination__slideshow')) {
	Slideshow(slideshowContainer);
}



