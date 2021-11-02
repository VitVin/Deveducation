`Получить строковое название дня недели по номеру дня.`
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

        console.log(days[numofday - 1])
    }
    }

daynumber(3);