function oper3() {
    let a = 1;
    let b = -1;
    let c = 1;
    let sum = 0;
    if ((!isNaN(a)) && (!isNaN(b)) && (!isNaN(c))) {
        if (a > 0) sum += a;
        if (b > 0) sum += b;
        if (c > 0) sum += c;
        console.log(sum);
    } else {
        console.log('Проверьте правильность вводных данных!')
    }
}
// Возможо не лучшее решение, но с того, что я пробовал - это самое компактное и рабочее,к тому же отвечает требованию.