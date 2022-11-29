export default function Packinglist() {
	

	const packinglistInput = document.querySelector('.packinglist__input');
	const packinglistAddButton = document.querySelector('.packinglist__add-button');
	const packinglistContainer = document.querySelector('.packinglist__container');
	const packinglist = document.querySelector('.packinglist');

	if (packinglist) {
		packinglistAddButton.addEventListener('click', handlePackinglistAddButtonClick);
	}
	
	function handlePackinglistAddButtonClick(event) {
		event.preventDefault();
		addItem();
	}

	function handleDeleteButtonClick(event) {
		const item = event.currentTarget.parentElement;

		deletePackingItem(item);
	}

	function handleCompletedButton(event) {
		const item = event.currentTarget.parentElement;

		completedItem(item);
	}

	function addItem() {
		const currentInput = packinglistInput.value;
		if(currentInput !== '') {
			createElement();
		}
	}

	function deletePackingItem(item) {
		item.remove();
	}

	function completedItem(item) {
		item.classList.toggle('packinglist__completed-button--done');
		packinglistInput.classList.toggle('packinglist__completed-input--done');
	}

	function createElement() {
		const packinglistDiv = document.createElement('div');
		const newPackinglistItem = document.createElement('div');
		const completedButton = document.createElement('button');
		const deleteButton = document.createElement('button');

		packinglistDiv.classList.add('packinglist__items');
		newPackinglistItem.classList.add('packinglist__list-item');
		completedButton.classList.add('packinglist__completed-button');
		deleteButton.classList.add('packinglist__delete-button');
		
		newPackinglistItem.innerText = packinglistInput.value;
		completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
		deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

		deleteButton.addEventListener('click', handleDeleteButtonClick);
		completedButton.addEventListener('click', handleCompletedButton);

		packinglistDiv.appendChild(newPackinglistItem);
		packinglistDiv.appendChild(completedButton);
		packinglistDiv.appendChild(deleteButton);

		packinglistContainer.appendChild(packinglistDiv);

		packinglistInput.value = '';
	}
}

