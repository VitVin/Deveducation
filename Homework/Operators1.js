let a = 5;
const b = 3;
let c;
if(!isNaN(a))
{
    switch (a % 2 === 0)
    {
        case true :
            c = a * b;
            break
        case false:
            c = a + b;
            break
    }
    console.log(c);
}else{
    console.log('Проверьте правильность вводных данных!');
}

