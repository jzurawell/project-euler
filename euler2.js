var lastNum = 1;
var fib = 0;

var array = [];

for (var i = 1; i <= 4000000;) {
    fib = i + lastNum;
    if (i % 2 === 0) {
        array.push(i);
    }
    i = lastNum;
    lastNum = fib;    
}

var sum = 0;

array.forEach(function(evenFib) {
    sum += evenFib;
})

console.log(sum);
    
