function makeCounter() {

    var currentCount = 1;

    return function() {

        return currentCount++;

    };

}

var counter = makeCounter(); // каждый вызов увеличивает счётчик и

console.log( counter() );
console.log( counter() );