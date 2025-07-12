const shoppingList = document.querySelector(".shopping-list");
const add = document.querySelector(".add");
const input = document.querySelector("input");

function addItem() {
  const shoppingItem = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");

  shoppingItem.appendChild(span);
  shoppingItem.appendChild(deleteButton);

  span.textContent = getInput();
  deleteButton.textContent = "Delete";

  shoppingList.appendChild(shoppingItem);

  deleteButton.addEventListener("click", () => {
    shoppingList.removeChild(shoppingItem);
  })
}

function getInput() {
  let inputValue = input.value;
  input.value = "";
  return inputValue;
}

add.addEventListener("click", addItem);

