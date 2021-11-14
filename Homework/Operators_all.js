function oper1(a,b) {

    let c;
    if (!isNaN(a)) {
        switch (a % 2 === 0) {
            case true :
                c = a * b;
                break
            case false:
                c = a + b;
                break
        }
        return c;
    } else {
    return    console.log('Проверьте правильность вводных данных!');
    }

}

function oper2(x,y) {
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

function oper3(a,b,c) {
    let sum = 0;
    if ((!isNaN(a)) && (!isNaN(b)) && (!isNaN(c))) {
        if (a > 0) sum += a;
        if (b > 0) sum += b;
        if (c > 0) sum += c;
        return sum;
    } else {
        console.log('Проверьте правильность вводных данных!')
    }
}

function oper4(a,b,c) {

    if ((!isNaN(a)) && (!isNaN(b)) && (!isNaN(c))) {
       return (Math.max(a * b * c, a + b + c) + 3);
    } else {
        console.log('Проверьте правильность вводных данных!')
    }
}

function oper5(rating)
{
    if (!isNaN(rating)) {
        switch (!isNaN(rating)) {
            case ((rating >= 0) && (rating <= 19)):
                return ('Оценка F')
                break
            case (rating >= 20 && rating <= 39):
                return ('Оценка E')
                break
            case (rating >= 40 && rating <= 59):
                return ('Оценка D')
                break
            case (rating >= 60 && rating <= 74):
                return ('Оценка C')
                break
            case (rating >= 75 && rating <= 89):
                return ('Оценка B')
                break
            case (rating >= 90 && rating <= 100):
                return ('Оценка A')
                break
            default:
                console.log('Указанная оценка за пределом допустимого диапазона!');
        }
    } else{console.log('Проверьте правильность вводных данных!')}
}