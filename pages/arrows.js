
let buttons = document.getElementById('footer_content').getElementsByClassName('button');

for (let button of buttons) {
    button.addEventListener('click', function (e) {
        document.location.href = button.dataset.link;
    })
}