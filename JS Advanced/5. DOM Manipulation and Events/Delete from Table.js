function deleteByEmail() {

    let email = document.getElementsByTagName('input')[0].value;
    let table = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    let div = document.getElementById('result');


    for (let i = 0; i < table.length; i++) {
        let elements = table[i].getElementsByTagName("td");

        if (email == elements[1].textContent) {
            table[i].parentNode.removeChild(table[i]);
            div.innerHTML = 'Deleted.';
            return;
        }
        else {
            div.innerHTML = 'Not found.'
        }
    }
}