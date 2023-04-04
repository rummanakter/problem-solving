//01-print numbers from 1 to 10

// for(var i=1; i<=10; i++){
//     document.write(i+"<br>");
// }





//02-print the odd numbers less than 100

// for(var i=1; i<=100; i+=2){
//     document.write(i+"<br>");
// }






//03-print the multiplication table with 7

// for(var i=1; i<=10; i++){
//     var row="7*" + i + "=" + 7*i;
//     console.log(row);
// }






//04-print all the multiplication tables with numbers from 1 to 10

// for(var i=1; i<=10; i++){
//     printTable(i);
//     console.log("");
// }

// function printTable(n){
//     for(var i=1; i<=10; i++){
//         var row=n + "*" + i + "=" + n*i;
//         console.log(row); 
//     }
// }






//05-calculate the sum of numbers from 1 to 10

// var sum=0;

// for (var i=1; i<=10; i++){
//     sum+=i;
// }
// console.log(sum);







//06-calculate 10!

// var prod=1;

// for(var i=1; i<=10; i++){
//     prod*=i;
// }
// console.log(prod);







//07-calculate the sum of odd numbers greater than 10 and less than 30

// var sum=0;

// for(var i=11; i<=30; i+=2){
//     sum += i;
// }

// console.log(sum);








//08-create a function that will convert from celsius to fahrenheit

function celsiusTofahrenheit(n){
    return n*1.8+32;
}

var r = celsiusTofahrenheit(20);

console.log(r);

























