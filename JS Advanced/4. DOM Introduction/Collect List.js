function extractText() {
    let list = document.getElementById('items').getElementsByTagName('li');
    let text = '';
    for (let el of list) {
        let contentLi = el.textContent;
        text += contentLi;
    }
    let box = document.getElementById('result');
    box.textContent = text;
}