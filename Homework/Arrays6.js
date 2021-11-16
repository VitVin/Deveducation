`Сделать реверс массива (массив в обратном направлении)`
function arr6() {
    let arr = [4, -2, 3, 4, 15, 6, 9, 8];
    let revarr = [];
    for (let i1 = arr.length - 1; i1 >= 0; i1--) {
        revarr += arr[i1]
    }

    console.log(revarr);
}
arr6()