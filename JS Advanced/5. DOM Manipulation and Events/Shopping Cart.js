function solve() {
    let textArea = document.getElementsByTagName('textarea')[0];
    let addButtons = document.getElementsByClassName('add-product');
    let products = [];
    let sum = 0;
    for (let i = 0; i < addButtons.length; i++) {
       addButtons[i].addEventListener('click', onClick);
    }
    function onClick(event) {
       let title = event.currentTarget.parentNode.parentNode.getElementsByClassName('product-title')[0].textContent;
       let price = event.currentTarget.parentNode.parentNode.getElementsByClassName('product-line-price')[0].textContent
       textArea.innerHTML += `Added ${title} for ${price} to the cart.\n`;
       if (!(products.includes(title))) {
          products.push(title);
       }
       sum += Number(price);
 
    }
    let checkButton = document.getElementsByClassName('checkout')[0];
    checkButton.addEventListener('click', checkClick);
 
    function checkClick(event) {
       textArea.innerHTML += `You bought ${products.join(", ")} for ${sum.toFixed(2)}.`;
       checkButton.disabled = true;
    
       for (let i = 0; i < addButtons.length; i++) {
          addButtons[i].disabled = true;
       }
    }
 }