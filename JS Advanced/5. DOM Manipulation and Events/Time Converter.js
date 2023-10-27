function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click', daysBtn);
    document.getElementById('hoursBtn').addEventListener('click', hoursBtn);
    document.getElementById('minutesBtn').addEventListener('click', minutesBtn);
    document.getElementById('secondsBtn').addEventListener('click', secondsBtn);

    function daysBtn() {
        let days = Number(document.getElementById('days').value);
        let hours = days * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }
    function hoursBtn() {
        let hours = Number(document.getElementById('hours').value);
        let days = hours / 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;
        document.getElementById('days').value = days;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }
    function minutesBtn() {
        let minutes = Number(document.getElementById('minutes').value);
        let hours = minutes / 60;
        let days = hours / 24;
        let seconds = minutes * 60;
        document.getElementById('hours').value = hours;
        document.getElementById('days').value = days;
        document.getElementById('seconds').value = seconds;
    }
    function secondsBtn() {
        let seconds = Number(document.getElementById('seconds').value);
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;
        document.getElementById('minutes').value = minutes;
        document.getElementById('hours').value = hours;
        document.getElementById('days').value = days;
    }
}