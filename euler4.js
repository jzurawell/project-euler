var palindrome = [];

for (var i = 999; i > 99; i--) {
    for (var j = 999; j > 99; j--) {
        var product = (i * j);
        var productString = product.toString();
        var backwardString = productString.split("").reverse().join("");
        
        if (productString === backwardString) {
             palindrome.push(product);
        }
    }
}

var maxOfArray = Math.max.apply(Math, palindrome);
console.log(max_of_array);

