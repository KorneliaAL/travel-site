export default function Packinglist() {
	// Found this code at https://www.youtube.com/watch?v=Ttf3CEsEwMQ. I have modified it.
	// Data
	let tasks = [];
	let visibleTasks = "all"; // "completed", "uncompleted"
	let itemExist = false;

	// Variables
	const packinglist = document.querySelector('.packinglist');
	const packinglistInput = document.querySelector('.packinglist__input');
	const packinglistAddButton = document.querySelector('.packinglist__add-button');
	const packinglistContainer = document.querySelector('.packinglist__container');
	const packinglistSelect = document.querySelector('.packinglist__select');

	// Event listeners
	if (packinglist) {
		packinglistAddButton.addEventListener('click', handlePackinglistAddButtonClick);
		packinglistSelect.addEventListener('change', handlePackinglistSelectChange);
	}
	// Event handlers
	function handlePackinglistAddButtonClick(event) {
		event.preventDefault();
		checkItemExist();
		addItem();
		renderHTML();
	}

	function handleDeleteButtonClick(event) {
		const item = event.currentTarget.parentElement;
		deleteItem(item);
		renderHTML();
	}

	function handleCompletedButton(event) {
		const item = event.currentTarget.parentElement;
		console.log(typeof item);
		completeItem(item);
		renderHTML();
	}

	function handlePackinglistSelectChange(event) {
		const listItems = packinglistContainer.childNodes;
		const selectedVisiblity = event.currentTarget.value;

		changeListVisibility(selectedVisiblity);
		renderHTML();
	}

	// Methods

	/**
	 * 
	 */
	function addItem() {
		if (!itemExist) {
		const currentInput = packinglistInput.value;
			if(currentInput !== '') {
				createItem();
			}
		}
	}

	/**
	 * Deletes created lists. Gets item from handleDeleteButtonClick, which is 
	 * the current target. 
	 * @param {object} item 
	 */
	function deleteItem(item) {
		const indexOfItemInTasks = tasks.findIndex(task => {
			return task.text === item.dataset.text;
		});

		tasks.splice(indexOfItemInTasks, 1);
	}


	/**
	 * Returns a dataset, that are the same as input.value. 
	 * Sets tasks.completed to the opposite bolean.
	 * @param {object} item 
	 */
	function completeItem(item) {
		const indexOfItemInTasks = tasks.findIndex(task => {
			return task.text === item.dataset.text;
		});

		tasks[indexOfItemInTasks].completed = !tasks[indexOfItemInTasks].completed;
	}

	/**
	 * 
	 * @param {string} visibilityValue 
	 */

	function changeListVisibility(visibilityValue) {
		visibleTasks = visibilityValue;
	}

	/**
	 * Push two objects in the tasks array.
	 *  
	 */

	function createItem() {
		tasks.push({
			text: packinglistInput.value,
			completed: false
		});
	}

	/**
	 * Can't add the same item twice after each other. 
	 * @todo make it work, so you cant add if the item already exist. 
	 */
	function checkItemExist() {
		tasks.forEach(task => {
			if (task.text === packinglistInput.value) {
				itemExist = true;
			}else if (task.text !== packinglistInput.value) {
				itemExist = false;
			}
		});
	}

	/**
	 * Adds elements to DOM. Filter visibility of the objects. 
	 * @example writes (bikini) returns bikini with delete and completed button.
	 * @example filter completed // returns only items that are completed. 
	 */
	// Render
	function renderHTML() {
		const tasksToShow = tasks.filter(task => {
			if (visibleTasks === "all") {
				return true;
			} else if (visibleTasks === "completed") {
				return task.completed === true;
			} else if (visibleTasks === "uncompleted") {
				return task.completed === false;
			}
		});

		packinglistContainer.innerHTML = "";
		
		for (const task of tasksToShow) {
			const packinglistDiv = document.createElement('div');
			const newPackinglistItem = document.createElement('div');
			const completedButton = document.createElement('button');
			const deleteButton = document.createElement('button');

			packinglistDiv.classList.add('packinglist__items');
			newPackinglistItem.classList.add('packinglist__list-item');
			completedButton.classList.add('packinglist__completed-button');
			deleteButton.classList.add('packinglist__delete-button');
			
			newPackinglistItem.innerText = task.text;
			packinglistDiv.dataset.text = task.text;
			completedButton.innerHTML = '<span class="fa-solid fa-check"></span>';
			deleteButton.innerHTML = '<span class="fa-solid fa-trash-can"></span>';

			if (task.completed === true) {
				packinglistDiv.classList.toggle('packinglist__completed-button--done');
			}
			
			deleteButton.addEventListener('click', handleDeleteButtonClick);
			completedButton.addEventListener('click', handleCompletedButton);

			packinglistDiv.appendChild(newPackinglistItem);
			packinglistDiv.appendChild(completedButton);
			packinglistDiv.appendChild(deleteButton);

			packinglistContainer.appendChild(packinglistDiv);

			packinglistInput.value = '';
		}
	}
}

