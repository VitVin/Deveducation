function obj3(arr) {
    let evens = arr.filter(x => x % 2 === 1);
    if (evens.length === 1) {
        return evens;
    } else {
        evens = arr.filter(x => x % 2 === 0)
        return evens;
    }
}
array1=[2,4,6,5];
array2=[3,5,4,7];
console.log(obj3(array1));