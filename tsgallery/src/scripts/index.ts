import '../styles/style.css';

const url = 'https://dog.ceo/api/breed/hound/images';
let page = 1;

function init() {
    for (let i: any = 0; i <= 5; i++) {
        const img: any = document.createElement('IMG');
        document.getElementById(i).append(img);
    }
    paintSection(1);
}

init();

async function getresponse(id) {
    const response = await fetch(url);
    const result = await response.json();
    for (let i = 0; i <= 5; i++) {
        document.getElementsByTagName('IMG').item(i).setAttribute('src', result.message[id]);
        id++;
    }
}

function paintSection(section) {
    const start = section * 6 - 6;
    getresponse(start);
}

function prevsection() {
    page--;
    document.getElementById('page').innerText = `Current page: ${page}`;
    paintSection(page);
}

function nextsection() {
    page++;
    document.getElementById('page').innerText = `Current page: ${page}`;
    paintSection(page);
}

const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.onclick = prevsection;
next.onclick = nextsection;
