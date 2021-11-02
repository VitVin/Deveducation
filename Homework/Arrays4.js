`Найти индекс максимального элемента массива`
let arr = [1,-2,3,4,15,6,9,8];
let max  = arr[1];
for (let i = 0; i<=arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(arr.indexOf(max));