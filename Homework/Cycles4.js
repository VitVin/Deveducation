`Вычислить факториал числа n. n! = 1*2*…*n-1*n;`
function cyc4(num) {

    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    console.log('Факториал заданного числа:', fact);
}
cyc4(5)