`Поменять местами первую и вторую половину массива, например, для массива`
function arr8() {
    let arr = [1, -2, 3, 4, 15, 6, 9, 8];
    let newarr = [];
    for (let i = arr.length / 2; i < arr.length; i++) {
        newarr += arr[i]
    }
    for (let i = 0; i < arr.length / 2; i++) {
        newarr += arr[i]
    }
    console.log(newarr);
}arr8()