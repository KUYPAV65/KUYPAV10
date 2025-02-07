function isLeapYear_LogicChain(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? "a leap year" : "not a leap year";
}


function isLeapYear_NestedIfConditional(year) {
    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            return "a leap year";
        } else if (year % 400 === 0) {
            return "a leap year";
        } else {
            return "not a leap year";
        }
    } else {
        return "not a leap year";
    }
}

// Test Case
console.log(isLeapYear_LogicChain(2100));
// expected: not a leap year
console.log(isLeapYear_NestedIfConditional(2100));
// expected: not a leap year

console.log(isLeapYear_LogicChain(2000));
// expected: a leap year
console.log(isLeapYear_NestedIfConditional(2000));
// expected: a leap year

console.log(isLeapYear_LogicChain(2024));
// expected: a leap year
console.log(isLeapYear_NestedIfConditional(2024));
// expected: a leap year