export default function Packinglist() {
	let tasks = [];
	let visibleTasks = "all"; // "completed", "uncompleted"
	let itemExist = false;
	// Found this code at https://www.youtube.com/watch?v=Ttf3CEsEwMQ. I have modified it.

	const packinglist = document.querySelector('.packinglist');
	const packinglistInput = document.querySelector('.packinglist__input');
	const packinglistAddButton = document.querySelector('.packinglist__add-button');
	const packinglistContainer = document.querySelector('.packinglist__container');
	const packinglistSelect = document.querySelector('.packinglist__select');

	if (packinglist) {
		packinglistAddButton.addEventListener('click', handlePackinglistAddButtonClick);
		packinglistSelect.addEventListener('change', handlePackinglistSelectChange);
	}
	
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
	
		completeItem(item);
		renderHTML();
	}

	function handlePackinglistSelectChange(event) {
		const listItems = packinglistContainer.childNodes;
		const selectedVisiblity = event.currentTarget.value;

		changeListVisibility(selectedVisiblity);
		renderHTML();
	}

	function addItem() {
		if (!itemExist) {
		const currentInput = packinglistInput.value;
			if(currentInput !== '') {
				createItem();
			}
		}
	}

	function deleteItem(item) {
		const indexOfItemInTasks = tasks.findIndex(task => {
			return task.text === item.dataset.text;
		});

		tasks.splice(indexOfItemInTasks, 1);
	}

	function completeItem(item) {
		const indexOfItemInTasks = tasks.findIndex(task => {
			return task.text === item.dataset.text;
		});

		tasks[indexOfItemInTasks].completed = !tasks[indexOfItemInTasks].completed;
	}

	function changeListVisibility(visibilityValue) {
		visibleTasks = visibilityValue;
	}

	function createItem() {
		tasks.push({
			text: packinglistInput.value,
			completed: false
		});
	}

	function checkItemExist() {
		tasks.forEach(task => {
			if (task.text === packinglistInput.value) {
				itemExist = true;
			}else if (task.text !== packinglistInput.value) {
				itemExist = false;
			}
		});
	}

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

