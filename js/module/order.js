export default function Order() {

	let destination = [
		{
			message: '',
			valid: false,
			image: 'url(../../assets/images/laos-1.jpg)'
		},
	];


	const destinationSelect = document.querySelector('#destination');
	const orderButton = document.querySelector('.order__button');
	// const orderOption = document.querySelectorAll('.order__option');
	const orderContainer = document.querySelector('.order');
	const orderRequired = document.querySelector('.order__required');
	const orderHeader = document.querySelector('.order__header');

	if (orderContainer) {
		orderButton.addEventListener('click', handleOrderButtonClick);
	}
	

	function handleOrderButtonClick(event) {
		checkRequiredInformation();
		renderHTML();
	}

	function checkRequiredInformation() {
		switch (destinationSelect.value) {
			case 'choose':
				destination.valid = false;
				destination.message = 'Velg destinasjon';
				break;
				
			case 'japan':
				destination.valid = true;
				destination.message = 'God tur til Japan';
				destination.image = 'url(assets/images/japan-1.jpg)';
				break;
			
			case 'laos':
				destination.valid = true;
				destination.message = 'God tur til Laos';
				destination.image = 'url(assets/images/laos-1.jpg)';
				break;

			case 'maldives':
				destination.valid = true;
				destination.message = 'God tur til Maldivene';
				destination.image = 'url(assets/images/maldives-1.jpg)';
				break;

			case 'cambodia':
				destination.valid = true;
				destination.message = 'God tur til Kambodsja';
				destination.image = 'url(assets/images/cambodia-1.jpg)';
				break;
		}
	}

	function renderHTML() {
		if (destination.valid === false) {
			orderRequired.innerText = destination.message;
		} else {
			orderContainer.innerText = destination.message;
			orderContainer.style.background = destination.image;
		}
	}
}