function pythagorean(a, b, c) {
    console.log(a * b * c);
}

for (var a = 1; a < 1000; a++) {
    for (var b = 2; b < 1000; b++) {
        for (var c = 3; c < 1000; c++) {
            if (a < b) {
                if (b < c) {
                    if (a + b + c === 1000) {
                        if ((a * a) + (b * b) === (c * c)) {
                            pythagorean(a, b, c);
                        }
                    }
                }
            }
        }
    }
}
