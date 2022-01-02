function obj3(arr) {
    let evens = arr.filter((x) => x % 2 === 1);
    if (evens.length === 1) {
        return evens;
    }
    evens = arr.filter((x) => x % 2 === 0);
    return evens;
}
const array1: number[] = [2, 4, 6, 5];
const array2: number[] = [3, 5, 4, 7];
console.log(obj3(array1));
