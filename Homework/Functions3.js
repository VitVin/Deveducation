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

func3(242);