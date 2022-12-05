export default function Order() {

	let message = '';
	let valid = false;

	const destinationSelect = document.querySelector('#destination');
	const orderButton = document.querySelector('.order__button');
	// const orderOption = document.querySelectorAll('.order__option');
	const orderContainer = document.querySelector('.order');
	const orderRequired = document.querySelector('.order__required');

	
	if (orderContainer) {
		orderButton.addEventListener('click', handleOrderButtonClick);
	}
	

	function handleOrderButtonClick(event) {
		event.preventDefault();
		checkRequiredInformation();
		renderHTML();
	}

	function checkRequiredInformation() {
		switch (destinationSelect.value) {
			case 'choose':
				valid = false;
				message = 'Velg destinasjon';
				break;

			case 'japan':
				valid = true;
				message = 'God tur til Japan';
				break;
			
			case 'laos':
				valid = true;
				message = 'God tur til Laos';
				break;

			case 'maldives':
				valid = true;
				message = 'God tur til Maldivene';
				break;

			case 'cambodia':
				valid = true;
				message = 'God tur til Kambodsja';
				break;
		}
	}

	function renderHTML() {
		if (valid === false) {
			orderRequired.innerText = message;
		} else {
			orderContainer.innerText = message;
		}
	}
}