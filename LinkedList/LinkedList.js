let list = {};
let  listlength = 0; // Длина листа
let curindex=1;

function resval()  // Сброс значений для коректной работы функций
{
    curindex = 1;
    dubllist=list;
}

function add(val)  // Добавление нового элемента
{
    list = { value: val, next: list };
    listlength++
}

function findind(val){                          // Поиск индекса заданного значения
  try {
      if (dubllist.value === val) {
          console.log(curindex);


      } else {
          curindex++
          dubllist = dubllist.next;
          findind(val)
      }
  }
  catch (e)
  {console.log('Данного значения не существует!')}
}


function findval(val)                        // Поиск значения по индексу
{
    try {
       for (let i = 1; i<=val-1; i++) {
           dubllist = dubllist.next;
       }
console.log(dubllist.value)
    }
    catch (e)
    {console.log('Данного значения не существует!')}
}

function del(val)
{
  `findind(val);
   let currindex = curindex;
   dubllist = dubllist.next;`
}






add('1 элемент');
add('2 элемент');
add('3 элемент');
add('4 элемент');
add('5 элемент');
add('6 элемент');
add('7 элемент');


console.log(list);
resval()
del('4 элемент');

