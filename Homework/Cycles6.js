`Вывести число, которое является зеркальным отображением последовательности
цифр заданного числа, например, задано число 123, вывести 321.`
let chis = 1234;
schis =  new String(chis);
newchis = new String();
for (let i=schis.length; i>=0; i--) {
   newchis += schis.charAt(i);
}
console.log(+newchis);