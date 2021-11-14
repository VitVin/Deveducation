let randomnumber = 0;
let min = 0;
let max = 0;
let listofnum = [];
let pastlist =[];
let fillcheck = false;

function fill() {
    min = Number(document.getElementById("minval").value);
    max= Number(document.getElementById("maxval").value);
    if (min>max|| min<0){
        alert('Check your values!')
    }else {

        for (let i = min; i <= max; i++) {
            listofnum[i] = i
        }
        fillcheck = true;
    }
}

function generatenumber() {

    if (fillcheck === false) {
        fill();
    }
    if (listofnum.length === min) {
        document.getElementById("numplace").innerHTML = "All numbers are generated"
    } else {

        randomnumber = Math.floor((Math.random() * (listofnum.length - min) + min));
        let pastlist = listofnum.splice(randomnumber, 1)

        console.log(randomnumber);
        console.log(listofnum)
        document.getElementById("numplace").innerHTML = "Generated number: " + pastlist;
    }
}



function a() {
    randomnumber = 0;
    min = 0;
    max = 0;
    listofnum = [];
    pastlist =[];
    document.getElementById("numplace").innerHTML = "Generated number"
    fillcheck = false;

}
