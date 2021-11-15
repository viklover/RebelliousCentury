
let pages = document.getElementsByClassName('page');
let links = [
    'pages/template/index.html',
    'pages/salt_riot/index.html',
    'pages/stepan_razin/index.html'
]

let i = 0;

for(let i = 0; i < pages.length; ++i) {
    pages[i].addEventListener('click', function() {
        document.location.href = links[i];
    });
}

