function create(words) {
    function onClick(event) {
       event.target.firstElementChild.style = 'display:inline';
    }
    let parentElement = document.getElementById("content");
 
    for (let i = 0; i < words.length; i++) {
       let newDiv = document.createElement('div');
       let newParagraph = document.createElement('p');
       newParagraph.setAttribute('style', 'display:none');
       newParagraph.innerHTML = words[i];
       newDiv.addEventListener('click', onClick);
       newDiv.appendChild(newParagraph);
       parentElement.appendChild(newDiv);
    }
 }