var y = 1;
var total = 0;

var array = [];

for (var i = 1; i <= 4000000;) {
    console.log(i);
    total = i + y;
    array.push(i);
    i = y;
    y = total;
}

var sum = 0;

array.forEach(function(fib) {
    if (fib % 2 === 0) {
        sum += fib;
        console.log(fib);
    } else {
        console.log(fib + " is not even");
    }
})

//console.log(array);
//console.log(sum);
//x + y = z
//array.push z
//x = y
//y = z
