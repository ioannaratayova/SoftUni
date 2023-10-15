function solve() {
    let text = document.getElementById('input').value;
    text = text.split(".");
    let counter = 0;
    let textToAppend = "";
    let div = document.getElementById('output');
  
    for (let i = 0; i < text.length; i++) {
      if (text[i].length > 0) {
        counter++;
        if (counter <= 3) {
          textToAppend += text[i] + ".";
        }
        else {
          let p = `<p>${textToAppend}</p>`
          div.innerHTML += p;
          textToAppend = "";
          counter = 1;
          textToAppend += text[i] + ".";
        }
      }
    }
    if (textToAppend.length > 0) {
      let p = `<p>${textToAppend}</p>`
      div.innerHTML += p;
    }
  }