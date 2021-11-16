`Найти минимальный элемент массива`
function arr1() {
    let arr = [1, -2, 3, 4, 15, 6, 9, 8];
    let min = arr[1];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(arr1())