`Посчитать сумму элементов массива с нечетными индексами`
let arr = [1,-2,3,4,15,6,9,8];
let sum  = 0;
for (let i = 0; i<=arr.length; i++)
    {
     if (i % 2 == 1)
    {
       sum = sum+arr[i];
     }
    }
console.log(sum);