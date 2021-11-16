`Посчитать сумму цифр заданного числа`
function cyc5(chis) {
    schis = new String(chis);
    let sum = 0;
    for (let i = 0; i <= schis.length; i++) {
        sum = sum + i;
    }
    console.log(sum);
}


