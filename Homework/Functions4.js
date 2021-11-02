let chis = 'сто двенадцать';
let sepchis = '';
let first = '';
let second ='';
let third = '';
let finchis ='';
let num = 0;

sepchis =  chis.split(' ')
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

let a1 = [  'ноль','один',
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

    let three = function ()
    {
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
        if (a2.includes(second)&& a3.includes(first)) {
            finchis += a2.indexOf(second) + '0';
        }

        if (a1.includes(second)&& a1.indexOf(second)<10 && a3.includes(first))
        {
            finchis+='0';
            finchis += a1.indexOf(second);
        } else  if (a1.includes(second))
        { finchis += a1.indexOf(second)}


    }

let one = function () {

    if (a1.includes(first))
    {
        finchis += a1.indexOf(first);
        console.log(finchis)
    }
    if (a3.includes(first)) {
        finchis += a3.indexOf(first)
        finchis+='00';
    }
    if (a2.includes(first))
    {
        finchis += a2.indexOf(first)
        finchis+='0';

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
console.log(num)
