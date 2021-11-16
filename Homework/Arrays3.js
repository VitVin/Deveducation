`Найти индекс минимального элемента массива`
function arr3() {
    let arr = [1, -2, 3, 4, 15, 6, 9, 8];
    let min = arr[1];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(arr.indexOf(min));
}