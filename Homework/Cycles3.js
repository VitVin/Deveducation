`Найти корень натурального числа с точностью до целого (рассмотреть вариант
последовательного подбора и метод бинарного поиска)`

let num = 81;
for (let i = 1; i*i<=num; i++)
{
    let slezna = i+1;
      if(slezna*slezna>num)
      {
          console.log(i)
      }
}

function binarySearch(){
    let start = 0;
    let end = num;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        let koren = middle*middle;
        if (koren === num) {

            console.log(middle);
        break;
        } else if (koren < num) {

            start = middle +1 ;
        } else {
            // search searching to the left
            end = middle -1 ;
        }

        }

    }

binarySearch();