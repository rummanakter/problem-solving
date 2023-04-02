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

for(var i=1; i<=10; i++){
    printTable(i);
    console.log("");
}

function printTable(n){
    for(var i=1; i<=10; i++){
        var row=n + "*" + i + "=" + n*i;
        console.log(row); 
    }
}







