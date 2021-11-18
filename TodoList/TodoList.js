var idforinput = 0;
var numofinp = localStorage.getItem('numofinp');



function addp()
{
  var geninp = document.createElement("geninp")
  var input = document.createElement("input");
  input.type = 'text';
  input.id = idforinput;
  idforinput+=1;
  var parent = document.getElementById("place");
  parent.append(input)

}

function init()
{
  for (let i = 0; i<numofinp; i++)
  {
    addp()
    let currelem = document.getElementById(i);
    currelem.value = localStorage.getItem(i)
  }
numofinp = 0;
}

init()

function save()
{
  localStorage.setItem('numofinp', idforinput)
  for (let i = 0; i<idforinput; i++)
  {
    let currelem = document.getElementById(i);
   localStorage.setItem(i,currelem.value)
  }
}

function dop()
{
  let currelem = document.getElementById(0);
  currelem.value = '';
}

function clearall()
{
  localStorage.clear();
  location.reload()
}

