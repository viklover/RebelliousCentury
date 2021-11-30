
let buttons = document.getElementsByClassName('button');

for(let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener('click', function() {
        console.log(buttons[i].dataset.link);
        // document.location.href = links[i];
        document.location.href = buttons[i].dataset.link;
    });
}

