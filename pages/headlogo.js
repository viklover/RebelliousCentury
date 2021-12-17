// HEADER WEBSITE LOGO
let container = document.getElementById('head').getElementsByClassName('container')[0];

container.onclick = function (e) {
    document.location.href = '../../index.html';
}

// FOOTER IHUB LOGO
let logo = document.getElementById('foot').getElementsByClassName('logo')[0];

logo.addEventListener('click', function () {
    document.location.href = 'https://ekat.ithub.ru';
});