function sumTable() {
    let firstTable = document.querySelector('table').querySelectorAll('tr');
    let sum = 0;
    for (let i = 1; i < firstTable.length - 1; i++) {
        let td = firstTable[i].querySelectorAll('td');
        let num = Number(td[td.length-1].innerHTML);
        sum += num;
    }
    document.getElementById('sum').innerHTML = sum;
}