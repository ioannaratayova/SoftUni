function addItem() {
    let textToAdd = document.getElementById("newItemText").value;
    let list = document.getElementById("items");
    let newElement = document.createElement('li');
    newElement.innerHTML = textToAdd;
    list.appendChild(newElement);
}