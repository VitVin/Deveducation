function palindrome(num : number) {
    const str: string = num.toString();
    if (str === str.split('').reverse().join('')) {
        console.log(num);
    } else {
        num += 1;
        palindrome(num);
    }
}
palindrome(142);
