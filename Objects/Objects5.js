function palindrome(num)
{
   let str = num.toString();
   if( str === str.split('').reverse().join(''))
   {
     console.log(num)
   }
   else
   {
      num = num +1;
      palindrome(num)

   }
}

palindrome(142)