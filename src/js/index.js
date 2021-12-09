import '../css/style.css'
import './DOM'
import {DOM} from "./DOM";
const url = 'https://dog.ceo/api/breed/hound/images';
let id = 0;
let isPause = false;
let countofpictures = 0;
let arrayofpictures = []

function  settimer() {
   window.timer = setInterval(nextslide, 5000);
}

async function getresponse () {
    let response = await fetch(url);
    let result = await response.json();
    console.log(result)
    for (let i = 0; i<=9; i++)
    {
        arrayofpictures[i] = result.message[i];
    }
    renderpicture(id)
}

function renderpicture(id){
   DOM.picture.src = arrayofpictures[id]
    countofpictures = arrayofpictures.length;
    console.log(arrayofpictures);
    console.log(id);
}

function prevslide() {
    if (id-1<0){
        id=countofpictures-1
        renderpicture(id)
    }else{
        id--
        renderpicture(id);
    }
}

function nextslide(){
    if (id+1>countofpictures-1){
        id=0
        renderpicture(id)
    }else{
        id++
       renderpicture(id);
    }
}

function pauseplay(){
    if (isPause===true){
        isPause=false
        settimer()
        DOM.play.style.borderRadius = '10px';
        DOM.play.value = 'Pause'
    } else {
       isPause=true
       clearInterval(window.timer)
        DOM.play.style.borderRadius = '50px';
        DOM.play.value = 'Play'
    }
}

DOM.prev.onclick = prevslide;
DOM.next.onclick = nextslide;
DOM.play.onclick = pauseplay;
getresponse()
settimer()