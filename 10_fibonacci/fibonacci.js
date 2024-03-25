const fibonacci = function(countArg) {
    let count
    if (typeof countArg != 'number') {
        count = parseInt(countArg)
    }

    if (count == 0) return 0;
    if (count < 0) return ('OOPS')

    let defaultOne = 1
    let defaultTwo = 0

    for (let i = 2; i <= count; i--) {
        let current = defaultOne + defaultTwo
        defaultTwo = defaultOne
        defaultOne = current
    }
};

// Do not edit below this line
module.exports = fibonacci;
