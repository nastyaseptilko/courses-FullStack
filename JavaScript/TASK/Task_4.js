function isNumberOdd(number) {
    return number % 2 !== 0;
}
console.log(isNumberOdd(11));
console.log(isNumberOdd(8));
console.log(isNumberOdd(0));
console.log(isNumberOdd(23));

function factorial(number) {
    return number ? number * factorial(number - 1) : 1;
}
console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(0));

function changeSpaceToUnderscore(string) {
    return string.replace(/ /g, '_')
}
console.log(changeSpaceToUnderscore("create function"));
console.log(changeSpaceToUnderscore("my name"));
console.log(changeSpaceToUnderscore("user"));