function addItem() {
    let text = document.getElementById('newItemText').value;
    let val = document.getElementById("newItemValue").value;

    let newOption = document.createElement('option');
    newOption.setAttribute('value', val);
    newOption.innerHTML = text

    document.getElementById('menu').appendChild(newOption);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}