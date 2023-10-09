function extract(id) {
    let text = document.getElementById(id).innerHTML;
    let regExp = /\((.+?)\)/g;
    let found = [...text.matchAll(regExp)];
    let arr = [];
    for (let i = 0; i < found.length; i++) {
        arr.push(found[i][1]);
    }
    let variable = arr.join("; ");
    return variable;
}