const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

const tasksContainer = document.querySelector(".tasks-container");

const validateInput = () => inputElement.Value.trim().length > 0

const handleAddTask = () => {
    const inputIsValid = validateInput();

    console.log(inputIsValid);

   if (!inputIsValid) {
    return inputElement.classList.add("error");
  }
  

}

addTaskButton.addEventList("click", () => handleAddTask());