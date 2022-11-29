export default function Packinglist() {
	const packinglistInput = document.querySelector('packinglist__input');
	const packinglistAddButton = document.querySelector('packinglist__add-button');
	const packinglistContainer = document.querySelector('.packinglist__container');

	packinglistAddButton.addEventListener('click', handlePackinglistAddButton);

	function handlePackinglistAddButton(event) {
		event.PreventDefault();
		addPackinglistItem();
	}

	function addPackinglistItem() {
		if(packinglistInput.value !== ''){
			renderHTML();
		}
	}

}


