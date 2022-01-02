function palindrome(num) {
    var str = num.toString();
    if (str === str.split('').reverse().join('')) {
        console.log(num);
    }
    else {
        num += 1;
        palindrome(num);
    }
}
palindrome(142);
