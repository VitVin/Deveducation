import "../css/style.css"
import {DOM} from "./DOM";

function addItem(event) {
    let input = document.createElement("input");
    input.type = 'text';
    input.className = 'item';
    input.draggable = true;
    input.addEventListener("dragstart", dragItem);
    let column = event.target.parentElement;
    column.insertBefore(input, column.childNodes[1])
    DOM.item = document.querySelectorAll('.item')
}

function deleteItem(item){
    if (item.target.className === 'item') {
        item.target.parentElement.removeChild(item.target)}
}

function dragItem(event){
    DOM.item.forEach((a,i)=> {
    if  (a===event.target){
        event.dataTransfer.setData('element', i)
    }
    });
}

function allowDrop(event){
    event.preventDefault()
}

function drop(event){
    let element = event.dataTransfer.getData('element')
    if (event.target.className === 'item'){
      event.target.parentElement.insertBefore(DOM.item[element], event.target)
    }
    if (event.target.className === 'column'){
        event.target.insertBefore(DOM.item[element], event.target.lastChild)
        console.log(event.target)
    }
}

DOM.button[0].addEventListener("click", addItem)
DOM.button[1].addEventListener("click", addItem)
DOM.button[2].addEventListener("click", addItem)

DOM.mainColumn.addEventListener("dblclick", deleteItem)

DOM.column[0].addEventListener("dragover", allowDrop)
DOM.column[0].addEventListener("drop", drop)

DOM.column[1].addEventListener("dragover", allowDrop)
DOM.column[1].addEventListener("drop", drop)

DOM.column[2].addEventListener("dragover", allowDrop)
DOM.column[2].addEventListener("drop", drop)