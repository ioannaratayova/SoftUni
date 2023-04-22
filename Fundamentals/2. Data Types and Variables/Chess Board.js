function chessBoard(n) {
    let color = 'black';
    let result = '<div class="chessboard">\n';
    for (let i = 0; i < n; i++) {
        let temp = "";
        for (let j = 0; j < n; j++) {
            temp += `    <span class="${color}"></span>\n`;
            if (color == 'black') {
                color = 'white';
            }
            else {
                color = 'black';
            }
        }
        if (n % 2 == 0){
            if (color == 'black') {
                color = 'white';
            }
            else {
                color = 'black';
            }
        }
        result += '  <div>\n';
        result += temp;
        result += '  </div>\n';
    }
    result += '</div>';
    return result;
}