export default function Order() {

	let destination = [
		{
			message: '',
			valid: false,
			emoji: ''
		},
	];


	const destinationSelect = document.querySelector('#destination');
	const orderButton = document.querySelector('.order__button');
	const orderContainer = document.querySelector('.order');
	const nameInput = document.querySelector('#firstname');

	if (orderContainer) {
		orderButton.addEventListener('click', handleOrderButtonClick);
	}
	

	function handleOrderButtonClick(event) {
		checkRequiredInformation();
		renderHTML();
	}

	function checkRequiredInformation() {
		const standardMessage = 'God tur til'
		switch (destinationSelect.value) {
			case 'japan':
				destination.valid = true;
				destination.message = `${standardMessage} Japan`;
				destination.emoji = '🇯🇵'
				break;
			
			case 'laos':
				destination.valid = true;
				destination.message = `${standardMessage} Laos`;
				destination.emoji = '🇱🇦'
				break;

			case 'maldives':
				destination.valid = true;
				destination.message = `${standardMessage} Maldivene`;
				destination.emoji = '🇲🇻'
				break;

			case 'cambodia':
				destination.valid = true;
				destination.message = `${standardMessage} Kambodsja`;
				destination.emoji = '🇰🇭';
				break;
		}
	}

	function renderHTML() {
		if (destination.valid === true) {
			orderContainer.classList.add('order__finished-order');
			orderContainer.innerHTML = `${destination.message}, ${nameInput.value} ${destination.emoji}`;
		}
	}
}