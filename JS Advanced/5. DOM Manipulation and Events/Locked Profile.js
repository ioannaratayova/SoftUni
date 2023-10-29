function lockedProfile() {
    function showHide(event) {
        if (event.target.innerHTML == 'Show more' && event.target.parentElement.getElementsByTagName('input')[1].checked) {
            event.target.parentElement.getElementsByTagName('div')[0].style = 'display: inline';
            event.target.innerHTML = 'Hide it';
        }
        else if (event.target.innerHTML == 'Hide it' && event.target.parentElement.getElementsByTagName('input')[1].checked) {
            event.target.parentElement.getElementsByTagName('div')[0].style = 'display: none';
            event.target.innerHTML = 'Show more';
        }
    }

    let buttons = document.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', showHide);
    }
}