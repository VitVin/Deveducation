`Вывести число, которое является зеркальным отображением последовательности
цифр заданного числа, например, задано число 123, вывести 321.`
function cyc6(chis) {
   schis = new String(chis);
   newchis = new String();
   for (let i = schis.length; i >= 0; i--) {
      newchis += schis.charAt(i);
   }
   return +newchis;
}
console.log(cyc6(123))