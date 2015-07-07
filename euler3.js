var _ = require('underscore');

var number = 600851475143;
var sqrtNumber = Math.ceil(Math.sqrt(number));
var sqrtI = 0;


var primeArray = [];
for (var i = 2; i < sqrtNumber; i++) {
    if (number % i === 0 && i % 2 !== 0) {
        sqrtI = Math.ceil(Math.sqrt(i));
        var isPrime = true;

        for (var j = 2; j < sqrtI; j++) {
            if (i % j === 0) {
                isPrime = false;
            } 
        }
        if (isPrime) {
            primeArray.push(i);
        }
    }
}

console.log(_.max(primeArray));