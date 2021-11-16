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

function cyc1() {
    let count = 0;
    let sum = 0;
    for (let i = 1; i <= 99; i++) {
        if (i % 2 == 0) {
            count += 1;
            sum = sum + i;
        }
    }
    return count;
    return sum;
}

function cyc2() {
    console.log('Все простые числа в заданном диапазоне');
    let numbers = '';
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 1) {
            numbers+= i.toString();
        }
    }
    return +numbers;
}
console.log(cyc2())

function  cyc3(num) {

    for (let i = 1; i * i <= num; i++) {
        let slezna = i + 1;
        if (slezna * slezna > num) {
            return i;
        }
    }
}

function binarySearch(num){

    let start = 0;
    let end = num;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        let koren = middle*middle;
        if (koren === num) {

            return middle;
            break;
        } else if (koren < num) {

            start = middle +1 ;
        } else {
            // search searching to the left
            end = middle -1 ;
        }

    }

}

function cyc4(num) {

    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}

function cyc5(chis) {
    schis = new String(chis);
    let sum = 0;
    for (let i = 0; i <= schis.length; i++) {
        sum = sum + i;
    }
    return sum;
}

function cyc6(chis) {
    schis = new String(chis);
    newchis = new String();
    for (let i = schis.length; i >= 0; i--) {
        newchis += schis.charAt(i);
    }
    return +newchis;
}

function arr1() {
    let arr = [1, -2, 3, 4, 15, 6, 9, 8];
    let min = arr[1];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function arr2() {
    let arr = [1, -2, 3, 4, 15, 6, 9, 8];
    let max = arr[1];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function arr3() {
    let arr = [1, -2, 3, 4, 15, 6, 9, 8];
    let min = arr[1];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return  arr.indexOf(min);
}

function arr4() {
    let arr = [1, -2, 3, 4, 15, 6, 9, 8];
    let max = arr[1];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return arr.indexOf(max);
}

function arr5() {
    let arr = [1, -2, 3, 4, 15, 6, 9, 8];
    let sum = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (i % 2 == 1) {
            sum = sum + arr[i];
        }
    }
    return sum;
}

function arr6(arr) {
    let revarr = [];
    for (let i1 = arr.length - 1; i1 >= 0; i1--) {
        revarr += arr[i1]
    }

    return revarr;
}

function arr7() {
    let arr = [1, -2, 3, 4, 15, 6, 9, 8];
    let sum = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 == 1) {
            sum = sum + arr[i];
        }
    }
    return sum;
}

function arr8() {
    let arr = [1, -2, 3, 4, 15, 6, 9, 8];
    let newarr = [];
    for (let i = arr.length / 2; i < arr.length; i++) {
        newarr += arr[i]
    }
    for (let i = 0; i < arr.length / 2; i++) {
        newarr += arr[i]
    }
    return newarr;
}

let daynumber = function (numofday) {
    let days = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье'
    ];
    if (numofday<1 || numofday > 7)
    {
        console.log('Перепроверьте номер дня недели!')

    }else {

        return days[numofday - 1]
    }
}
let distpoint = function(x,y,x1,y1)
{
    let dist = 0;

    dist = Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2))
    return  dist;
}

function func3(chis) {

    var schis = new String(chis);
    var s = [];
    var number = '';

    let a2 = ['', '', 'двадцать ',
        'тридцать ',
        'сорок ',
        'пятьдесят ',
        'шестьдесят ',
        'семьдесят ',
        'восемьдесят ',
        'девяносто '
    ];
    let a3 = ['',
        'сто ',
        'двести ',
        'триста ',
        'четыреста ',
        'пятьсот ',
        'шестьсот ',
        'семьсот ',
        'восемьсот ',
        'девятьсот '];
    let a11 = [
        'десять',
        'одинадцать',
        'двенадцать',
        'тринадцать',
        'четырнадцать',
        'пятнадцать',
        'шестнадцать',
        'семнадцать',
        'восемнадцать',
        'девятнадцать',
    ];
    let a1 = ['', 'один',
        'два',
        'три',
        'четыре',
        'пять',
        'шесть',
        'семь',
        'восемь',
        'девять',
    ]
    let edinici = function () {
        for (let i = 0; i < schis.length; i++) {
            s += a1[schis[i]]
            if (schis[i] === '0') {
                console.log('ноль')
            }
        }

        number+=s;
    }

    let desyatki = function () {
        for (let i = 0; i < schis.length; i++) {

            if (i === 0) {
                s += a2[schis[i]];
            }

            if (schis[i] === '1' && i === 0) {
                s += a11[schis[i + 1]]
                break;
            }

            if (i === 1) {
                s += a1[schis[i]]
            }
        }
        number+=s;
    }


    let sotni = function () {
        for (let i = 0; i < schis.length; i++) {
            if (i === 0) {
                s += a3[schis[i]]
            }

            if (i === 1) {
                s += a2[schis[i]];
            }

            if (schis[i] === '1' && i === 1) {
                s += a11[schis[i + 1]]
                break;
            }

            if (i === 2) {
                s += a1[schis[i]]
            }
        }
        number+=s;
    }


    switch (schis.length) {

        case(1):
            edinici();
            break;
        case (2):
            desyatki();
            break;
        case(3):
            sotni();
            break;
    }

    return number;
}

function func4(chis) {
    let sepchis = '';
    let first = '';
    let second = '';
    let third = '';
    let finchis = '';
    let num = 0;
    sepchis = chis.split(' ')
    first = sepchis[0];
    second = sepchis[1];
    third = sepchis[2];
    let a2 = ['', '',
        'двадцать',
        'тридцать',
        'сорок',
        'пятьдесят',
        'шестьдесят',
        'семьдесят',
        'восемьдесят',
        'девяносто'
    ];
    let a3 = ['',
        'сто',
        'двести',
        'триста',
        'четыреста',
        'пятьсот',
        'шестьсот',
        'семьсот',
        'восемьсот',
        'девятьсот'];
    let a1 = ['ноль', 'один',
        'два',
        'три',
        'четыре',
        'пять',
        'шесть',
        'семь',
        'восемь',
        'девять',
        'десять',
        'одинадцать',
        'двенадцать',
        'тринадцать',
        'четырнадцать',
        'пятнадцать',
        'шестнадцать',
        'семнадцать',
        'восемнадцать',
        'девятнадцать',
    ]
    let three = function () {
        if (a3.includes(first)) {
            finchis += a3.indexOf(first);
        }
        if (a2.includes(second)) {
            finchis += a2.indexOf(second);
        }
        if (a1.includes(third)) {
            finchis += a1.indexOf(third);
        }
    }
    let two = function () {
        if (a2.includes(first)) {
            finchis += a2.indexOf(first);
        }
        if (a3.includes(first)) {
            finchis += a3.indexOf(first)
        }
        if (a2.includes(second) && a3.includes(first)) {
            finchis += a2.indexOf(second) + '0';
        }
        if (a1.includes(second) && a1.indexOf(second) < 10 && a3.includes(first)) {
            finchis += '0';
            finchis += a1.indexOf(second);
        } else if (a1.includes(second)) {
            finchis += a1.indexOf(second)
        }
    }

    let one = function () {

        if (a1.includes(first)) {
            finchis += a1.indexOf(first);
            console.log(finchis)
        }
        if (a3.includes(first)) {
            finchis += a3.indexOf(first)
            finchis += '00';
        }
        if (a2.includes(first)) {
            finchis += a2.indexOf(first)
            finchis += '0';
        }
    }

    switch (sepchis.length) {
        case(3):
            three();
            break;
        case(2):
            two();
            break;
        case(1):
            one();
            break;
    }
    num = +finchis
    return num;
}


