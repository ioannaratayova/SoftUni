function focused() {
    let divsToIterate = document.getElementsByTagName('div')[0].getElementsByTagName('div');
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focus', onFocus);
        inputs[i].addEventListener('blur', onBlur);
    }
    
    function onFocus(event) {
        event.currentTarget.parentNode.classList.add('focused');
    }

    function onBlur(event) {
        event.currentTarget.parentNode.classList.remove('focused');
    }
}