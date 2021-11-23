let list = {};
let listlength = 0;                                     //   Длина листа
var curindex = 0;
let curindexind = 0;
let dubllist = {}
let id = 0;


function add(val) {                                 // Добавление нового элемента
    list[listlength] = {value: val, next: null};
  try {
      list[listlength - 1].next = list[listlength]
  }
  catch (e)
  {}
    listlength++
}

function addmany(val){   // Добавление множества элементов

    for (let i = 0; i<=val.length-1; i++)
    {
    list[i] = {value: val[i], next: null};
    try {
        list[i - 1].next = list[i]
    }
    catch (e)
    {}
    listlength++
}
}

dubllist = list;

function findind(val) {             // Поиск индекса заданного значения

    if (list[curindex].value === val) {
           console.log(curindex);
        } else {
            curindex++
            findind(val)
        }
}

function findval(ind)                        // поиск значения по заданному индексу
{
    return dubllist[ind].value;
}

function del(val)                               // удаление элемента по значению
{
    try {
        findind(val)
        if (curindex === listlength - 1) {
            list[curindex - 1].next = null
        } else {
            list[curindex - 1].next = list[curindex + 1]
        }
        delete list[curindex]
        curindex = 0;
        listlength--;
    }
    catch (e)
    {console.log('Проверьте вводные данные!')}
    }

function dellast()                                      // удаление последнего элемента
{

    list[listlength-2].next = null;
    delete list[listlength-1]
    listlength--;

}

function paint()                                             // Отрисовка листа
{
    var input = document.createElement("input");
    input.type = 'text';
    input.id =id;
    input.value = 'Value: ' + list[id].value;
    try
    {input.value +=' Next: '+ list[id].next.value}
    catch (e)
    { input.value +=' Next: Null' }
    id++
    var parent = document.getElementById("place");
    parent.append(input)
    if(id === listlength) {}
else
    {
        paint()
    }
}



addmany(['asdd', 'aaaaa', 'dddd', 'ssss']) // Добавление нескольких элементов
add('eee') // Добавление одного элемента
add('uuu')
dellast(); // Удаление последнего элемента
del('ssss')// удаление элемента по значению

console.log(list);
console.log(listlength, ' - Длина листа');
console.log(findval(2), ' - значение заданного индекса'); // Поиск значения по индексу
console.log('Индекс заданного значения:' )
findind('dddd'); // Поиск индекса по значению