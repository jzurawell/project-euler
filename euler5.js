var factorial = 1;

for (var x = 1; x < 21; x++) {
    factorial = x * factorial;
}

for (var n = 20; n < factorial; n += 20) {
    var isDivisible = true;
    for (var x = 1; x < 21; x++) {
        if (n % x !== 0) {
            isDivisible = false;
            break;
        }
    }
    if (isDivisible) {
        console.log(n);
        break;
    }
}