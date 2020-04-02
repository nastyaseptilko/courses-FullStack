var x = 10;
var y = 5;
var isXMore = x <= y; //> < >= <=

var x1 = 10;
var y2 ="10";
var isXMore2 = x1 ==  y2; // == нестрогое сравнение
var isXMore3 = x1 === y2; // === строгое сравнение

// != нестрогое равно , не сравнивают и тип, а только значение
// !== строгое равно , сравнивают и тип и значение
console.log(isXMore);
console.log(isXMore2);
console.log(isXMore3);

console.log(true == 1); // true все остальные значения false
console.log(false == 0); //true все остальные значения false
console.log(null == undefined);
console.log(NaN == NaN); //false