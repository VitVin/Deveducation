function sum(str1,str2)
{
    let sum = '';
    for (let i=0;i<str1.length; i++) {
        sum += Number(str1.charAt(i)) + Number(str2.charAt(i))
    }
   return sum;
}

console.log(sum('11111111111111111111111111111111111111111111111111111111','2222222222222222222222222222222222222222222222222222222222'))