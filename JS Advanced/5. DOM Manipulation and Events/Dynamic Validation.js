function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', onChange);
    let regExp = /[a-z]+@[a-z]+\.[a-z]+/g;

    function onChange(event) {
        let inputEmail = input.value;
        if (inputEmail.match(regExp)) {
            event.currentTarget.classList.remove('error');
        }
        else {
            event.currentTarget.classList.add('error');
        }
    }
}