const sumAll = function(rangeBeg, rangeEnd) {
    if (!Number.isInteger(rangeBeg) || !Number.isInteger(rangeEnd)) return 'ERROR';
    if (rangeBeg < 0 || rangeEnd < 0) return 'ERROR';
    if (rangeBeg > rangeEnd) {
        let temp = rangeBeg;
        rangeBeg = rangeEnd;
        rangeEnd = temp;
    }
    let count = 0;
    for (let i = rangeBeg; i <= rangeEnd; i++) {
        count += i;
    }
    return count;
};

// Do not edit below this line
module.exports = sumAll;
