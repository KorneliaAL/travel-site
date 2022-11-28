import Header from './module/header.js';
import Slideshow from './module/slideshow.js';
import * as Destination from './module/destination.js';
import Packinglist from './module/packinglist.js'

Header();
Destination.Destination();
Slideshow(Destination.currentCountry);
Packinglist();
