function obj3(arr) {
    var evens = arr.filter(function (x) { return x % 2 === 1; });
    if (evens.length === 1) {
        return evens;
    }
    evens = arr.filter(function (x) { return x % 2 === 0; });
    return evens;
}
var array1 = [2, 4, 6, 5];
var array2 = [3, 5, 4, 7];
console.log(obj3(array2));
