var primeArray = [];
 
for (var i = 2; primeArray.length < 10001; i++) {
    var isPrime = true;
    
    if (i === 2) {
        primeArray.push(i);
    }

    else if (i % 2 !== 0) {
        var sqrtI = Math.ceil(Math.sqrt(i));
        
        for (var j = 3; j <= sqrtI; j++) {
            if (i % j === 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            primeArray.push(i);
        }
    }
}

var num = primeArray.pop();
console.log(num);

