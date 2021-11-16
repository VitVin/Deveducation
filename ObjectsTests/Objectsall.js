function getCookingTime(eggsAmount)
{
    let sum;
    sum= Math.ceil(eggsAmount / 5)*5
    return  sum;
}



function obj2(arr) {
    let evens = arr.filter(x => x % 2 === 1);
    if (evens.length === 1) {
        return +evens;
    } else {
        evens = arr.filter(x => x % 2 === 0)
        return +evens;
    }
}


function obj4(string) {
    let str = string.split('').sort()
    object = {};
    str.forEach(function (a, i) {
        if (object[str[i]] = object[str[i]]) {
            object[str[i]] += 1
        } else {
            object[str[i]] = 1
        }
    });
    return object;
}

function palindrome(num)
{
    let str = num.toString();
    if( str === str.split('').reverse().join(''))
    {
        console.log(num);
    }
    else
    {
        num = num +1;
        palindrome(num);
    }
}

function obj6() {
    const newset = new Set();
    newset.add(21);
    newset.add(48);
    newset.delete(21);
    console.log(newset.has(48));
    return typeof(newset);
}