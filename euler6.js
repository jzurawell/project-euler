var sumOfSquares = 0;

for (var i = 1; i < 101; i++) {
    var square = i * i;
    sumOfSquares += square;
}

var sum = 0;

for (var i = 1; i < 101; i++) {
    sum += i
}

var squareOfSum = sum * sum;

var difference = squareOfSum - sumOfSquares;
console.log(difference);