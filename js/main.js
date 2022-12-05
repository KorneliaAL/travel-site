import Header from './module/header.js';
import Slideshow from './module/slideshow.js';
import Destination from './module/destination.js';
import Packinglist from './module/packinglist.js'
import Order from './module/order.js';

Header();
Destination();
for (const slideshowContainer of document.querySelectorAll('.destination__slideshow')) {
	Slideshow(slideshowContainer);
}
Packinglist();
Order();


