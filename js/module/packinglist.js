export default function Packinglist() {

	console.log('pakke')
	const packinglistInput = document.querySelector('.packinglist__input');
	const packinglistAddButton = document.querySelector('.packinglist__add-button');
	const packinglistContainer = document.querySelector('.packinglist__container');

	packinglistAddButton.addEventListener('click', handlePackinglistAddButton);

	function handlePackinglistAddButton(event) {
		event.preventDefault();
		// addPackinglistItem();
		renderHTML();
	}

	// function addPackinglistItem() {
	// 	if(packinglistInput.value !== ''){
	// 		renderHTML();
	// 	}
	// }

	function renderHTML() {
		const packinglistDiv = document.createElement('div');
		const newPackinglistItem = document.createElement('li');
		const completedButton = document.createElement('button');
		const deleteButton = document.createElement('button');

		packinglistDiv.classList.add('packinglist__items');
		newPackinglistItem.classList.add('packinglist__items');
		completedButton.classList.add('packinglist__completed-button');
		deleteButton.classList.add('packinglist__delete-button');
		
		newPackinglistItem.innerText = packinglistInput.value;
		completedButton.innerHTML = 'Ferdig';
		deleteButton.innerText = 'Slett';

		packinglistDiv.appendChild(newPackinglistItem);
		packinglistDiv.appendChild(completedButton);
		packinglistDiv.appendChild(deleteButton);

		packinglistContainer.appendChild(packinglistDiv);

		packinglistInput.value = '';
	}
}


