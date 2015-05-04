// A Prime Number can be divided evenly only by 1 or itself.
// And it must be a whole number greater than 1.
var _ = require('underscore');

var number = 600851475143;
var sqrtNumber = Math.ceil(Math.sqrt(number));
var sqrtI = 0;


// get odd factors
var primeArray = [];
for (var i = 2; i < sqrtNumber; i++) {
    if (number % i === 0 && i % 2 !== 0) {
        sqrtI = Math.ceil(Math.sqrt(i));
        //console.log(i);
        var isPrime = true;

        // get prime factors
        for (var j = 2; j < sqrtI; j++) {
            if (i % j === 0) {
                //console.log(i + " is not prime.")
                isPrime = false;
            } 
        }
        if (isPrime) {
            primeArray.push(i);
        }
    }
}

console.log(_.max(primeArray));
