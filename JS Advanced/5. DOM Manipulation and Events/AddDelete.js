function addItem() {
    let textToAdd = document.getElementById("newItemText").value;
    let list = document.getElementById("items");
    let newElement = document.createElement('li');
    newElement.innerHTML = textToAdd;
  

    let newTag = document.createElement('a');
    newTag.innerHTML = '[Delete]';
    newTag.setAttribute('href', '#');
    newTag.addEventListener('click', deleteFunction);
    newElement.appendChild(newTag);
    
    list.appendChild(newElement);

    function deleteFunction(event) {
        event.currentTarget.parentNode.remove();
    }
}