let tickets = [25,50,100]
let change = [];

let bool = true;

function turn()
{
    let curchange
    for (let i=0; i<tickets.length; i++)
    {
       curchange = tickets[i]-25;
       console.log(curchange);

 switch (curchange) {
     case(0):
     change[change.length]=25;
         bool = true;
    console.log(change)


     break
     case(25):
         if (change.includes(25)) {
             change.splice(change.indexOf(25), 1, 50)
             console.log(change)
             break
         }
         bool = false;
break
     case(75):
         if ((change.includes(25) & change.includes(50))) {
                 change.splice(change.indexOf(25), 1)
             change.splice(change.indexOf(50), 1, 100)
             console.log(change)
             break
         }

         var count = 0;
         for (let j=0; j<change.length-1; j++)
         {
            if (change[i]=25) { count++}
         }

        console.log(count, 'count')

         if (count>=3)
         {
             change.splice(change.indexOf(25), 1)
             change.splice(change.indexOf(25), 1)
             change.splice(change.indexOf(25), 1)
             change.splice(change.indexOf(25), 1,100)
             console.log(change)
             break
         }
         bool=false
         break
     }
     }

}




turn();
console.log(bool)