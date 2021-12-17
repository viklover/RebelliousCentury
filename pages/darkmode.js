let button = document.getElementsByClassName('dark_mode')[0];

function toggleMode() {
    if (document.body.classList.contains('dark')) {
        setCookie('darkmode', '0');
    } else {
        setCookie('darkmode', '1');
    }
    document.body.classList.toggle('dark');
    document.getElementsByClassName('dark_mode')[0].classList.toggle("on");
}

button.onclick = function (e) {
    toggleMode();
}

if (getCookie('darkmode') === '1') {
    toggleMode()
}