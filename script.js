let count = 0;



function sayHello() {
    console.log(count + '. hello');
    count += 1;

}
// setTimeout(sayHello, 4000);


for (let i = 0; i < 10; i++) {
   // setTimeout(printIndex, 100 * i, i);
   setTimeout(
       function() {
           console.log(i);
       }
   , 1000 * i);
}

/*
function printIndex(index) {
    console.log(index);
}
*/
// setInterval(sayHello, 1000);