var number = 2000000;
var primeArray = [2];
var total = 0;


for (var i = 2; i < number; i++) {
    var sqrtI = Math.ceil(Math.sqrt(i));
    var isPrime = true

    if (i % 2 === 0) {
        continue;
    }
    for (var y = 3; y <= sqrtI; y++) {
        if (i % y === 0) {
            isPrime = false;
        }
    }     
    if (isPrime) {
        primeArray.push(i);
    }
}

primeArray.forEach(function(num) {
    total += num;
})

console.log(total);