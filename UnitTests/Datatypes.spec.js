

 describe ('Четные числа перемножит, нечетные просуммирует ', () => {
    it('Перемножит, получит 6', () => {
        expect(oper1(2, 3)).to.equal(6);
    });
     it('Просуммирует числа, получит 5', () => {
         expect(oper1(3, 2)).to.equal(5);
     });
     it('Проверит ввод', () => {
         expect(oper1('asdasd', 2)).to.equal(console.log('Проверьте правильность вводных данных!'));
     });
   })

 describe ('В какой четверти находится точка', () => {
     it('Выдаст первую четверть', () => {
         expect(oper2(-1, 2)).to.equal(console.log('Точка находится в первой четверти'));
     });
     it('Выдаст вторую четверть', () => {
         expect(oper2(2, 2)).to.equal(console.log('Точка находится во второй четверти'));
     });
     it('Выдаст третью четверть', () => {
         expect(oper2(-2, -2)).to.equal(console.log('Точка находится в третей четверти'));
     });
     it('Выдаст четвертую четверть', () => {
         expect(oper2(-2, -2)).to.equal(console.log('Точка находится в четвертой четверти'));
     });
     it('Проверит ввод', () => {
         expect(oper2('asdasd', -2)).to.equal(console.log('Проверьте правильность вводных данных!'));
     });
 })

 describe ('Просуммирует только положительные числа', () => {
     it('Получит 3', () => {
         expect(oper3(-1, 2, 1)).to.equal(3);
     });
     it('Проверит ввод', () => {
         expect(oper2('asdasd', -2, 3)).to.equal(console.log('Проверьте правильность вводных данных!'));
     });
 })

 describe ('Посчитать выражение (макс(а*б*с, а+б+с))+3', () => {
     it('При a=2, b=3, c=2 получит 15', () => {
         expect(oper4(2, 3, 2)).to.equal(15);
     });
     it('Проверит ввод', () => {
         expect(oper4('asdasd', -2, 3)).to.equal(console.log('Проверьте правильность вводных данных!'));
     });
 })

 describe ('Написать программу определения оценки студента по его рейтингу, на основе\n' +
     'определенных правил', () => {
     it('Выдаст F', () => {
         expect(oper5(10)).to.equal('Оценка F');
     });
     it('Выдаст E', () => {
         expect(oper5(20)).to.equal('Оценка E');
     });
     it('Выдаст D', () => {
         expect(oper5(40)).to.equal('Оценка D');
     });
     it('Выдаст C', () => {
         expect(oper5(60)).to.equal('Оценка C');
     });
     it('Выдаст B', () => {
         expect(oper5(76)).to.equal('Оценка B');
     });
     it('Выдаст A', () => {
         expect(oper5(90)).to.equal('Оценка A');
     });
     it('Проверит диапазон чисел', () => {
         expect(oper5('500')).to.equal(console.log('Указанная оценка за пределом допустимого диапазона!'));
     });
     it('Проверит правильность вводных данных', () => {
         expect(oper5('asasd')).to.equal(console.log('Проверьте правильность вводных данных!'));
     });
 })

     // Циклы

 describe ('Найти сумму четных чисел и их количество в диапазоне от 1 до 99', () => {
     it('Выдаст 49 b 2450', () => {
         expect(cyc1()).to.equal( 49, 2450);
     });
 })

 describe (`Проверить простое ли число? (число называется простым, если оно делится только
само на себя и на 1)`, () => {
     it('Выдаст все простые числа от 0 до 10', () => {
         expect(cyc2()).to.equal(13579);
     });
 })
 describe (`Найти корень натурального числа с точностью до целого используя вариант последовательного подбора`, () => {
     it('Выдаст корень 81, т.е. 9', () => {
         expect(cyc3(81)).to.equal(9);
     });
     it('Выдаст корень 67, округленный до целого т.е. 8', () => {
         expect(cyc3(67)).to.equal(8);
     });
 })

 describe (`Найти корень натурального числа с точностью до целого используя вариант метод бинарного поиска`, () => {
     it('Выдаст корень 49, т.е. 7 используя бинарный поиск', () => {
         expect(binarySearch(49)).to.equal(7);
     });
 })

 describe (`Вычислить факториал числа n. n! = 1*2*…*n-1*n;`, () => {
     it('Вычеслит факториал 5, выдаст 120', () => {
         expect(cyc4(5)).to.equal(120);
     });
 })


 describe (`Посчитать сумму цифр заданного числа`, () => {
     it('Вычеслит сумму цифр числа 123, т.е. 6', () => {
         expect(cyc5(123)).to.equal(6);
     });
 })

 describe (`Вывести число, которое является зеркальным отображением последовательности
цифр заданного числа, например, задано число 123, вывести 321.`, () => {
     it('Выдаст 321', () => {
         expect(cyc6(123)).to.equal(321);
     });
 })

 // Массивы


 describe (`Найти минимальный элемент массива`, () => {
     it('Выдаст -2', () => {
         expect(arr1()).to.equal(-2);
     });
 })

 describe (`Найти максимальный элемент массива`, () => {
     it('Выдаст 15', () => {
         expect(arr2()).to.equal(15);
     });
 })

 describe (`Найти индекс минимального элемента массива`, () => {
     it('Выдаст 1', () => {
         expect(arr3()).to.equal(1);
     });
 })

 describe (`Найти индекс максимального элемента массива`, () => {
     it('Выдаст 4', () => {
         expect(arr4()).to.equal(4);
     });
 })

 describe (`Посчитать сумму элементов массива с нечетными индексами`, () => {
     it('Выдаст 16', () => {
         expect(arr5()).to.equal(16);
     });
 })

 describe (`Сделать реверс массива (массив в обратном направлении)`, () => {
     it('Выдаст 321', () => {
         expect(arr6([1,2,3])).to.equal('321');
     });
 })

 describe (`Посчитать сумму количества нечетных элементов массива`, () => {
     it('Выдаст 28', () => {
         expect(arr7()).to.equal(28);
     });
 })

 describe (`Поменять местами первую и вторую половину массива, например, для массива`, () => {
     it('Выдаст 156981-234', () => {
         expect(arr8()).to.equal('156981-234');
     });
 })

     // Функции

 describe (`Получить строковое название дня недели по номеру дня.`, () => {
     it('Проверка вывода дня недели', () => {
         expect(daynumber(2)).to.equal('Вторник');
     });
     it('Проверка на выход из диапазона', () => {
         expect(daynumber(8)).to.equal(console.log());
     });
 })


 describe (`Найти расстояние между двумя точками в двухмерном декартовом пространстве.`, () => {
     it('Проверка поиска расстояния', () => {
         expect(distpoint(1,3,4,-2)).to.equal(5.830951894845301);
     });
 })

 describe (`Вывод строчного представления числа`, () => {
     it('Вывод трехзначных чисел', () => {
         expect(func3(136)).to.equal('сто тридцать шесть');
     });

     it('Вывод десятков', () => {
         expect(func3(10)).to.equal('десять');
     });

     it('Вывод цифр', () => {
         expect(func3(8)).to.equal('восемь');
     });
 })

 describe (`Преобразование строчного представления числа в число`, () => {
     it('Вывод трехзначных чисел', () => {
         expect(func4('сто тридцать шесть')).to.equal(136);
     });

     it('Вывод десятков', () => {
         expect(func4('десять')).to.equal(10);
     });

     it('Вывод цифр', () => {
         expect(func4('восемь')).to.equal(8);
     });
 })


