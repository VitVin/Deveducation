function oper4() {
    let a = 2;
    let b = 3;
    let c = 2;
    if ((!isNaN(a)) && (!isNaN(b)) && (!isNaN(c))) {
        console.log(Math.max(a * b * c, a + b + c) + 3);
    } else {
        console.log('Проверьте правильность вводных данных!')
    }
}