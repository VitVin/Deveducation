function oper2() {
    let x = 2;
    let y = 2;
    switch ((!isNaN(x)) || (!isNaN(y))) {
        case (x < 0 && y > 0):
            console.log('Точка находится в первой четверти')
            break;
        case (x > 0 && y > 0):
            console.log('Точка находится во второй четверти')
            break;
        case (x < 0 && y < 0):
            console.log('Точка находится в третей четверти')
            break;
        case (x > 0 && y < 0):
            console.log('Точка находится в четвертой четверти')
            break;
        default:
            console.log('Проверьте правильность вводных данных!')
    }
}