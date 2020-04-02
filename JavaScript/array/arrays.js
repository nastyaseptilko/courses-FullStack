// var rainbowColors = ["red","orange", "yellow", "green", "blue", "indigo","violet"];
// rainbowColors[0] = "orange";
// rainbowColors[8] = "red";
// rainbowColors[rainbowColors.length] = "red";
// console.log(rainbowColors);
//
// var emptyArray=[];
// var emptyArrayNew = new Array();
//
// var numberArray = [1,2,3,45,6,7,8,90];
// console.log(numberArray);
//
// var anyItems = [1, "rain", 2, null];
// console.log(anyItems);

//push добавление эл-ов в конец массива и вывод количества эл-ов
//pop удаляет последний эл-т из массива и возвращает значение эл-та которого удалил
//unshift/shift тоже что и push/pop  только вначале массива
//indexOf возвращает индекс массива
//slice скопировать часть массива и присвоить другой массив
//---------------------------------------

var  names = ["Nastya", "Jon", "Jack", "Ilya"];
console.log(names);
//names[names.length] = "Jeen";
names.push("Liza");
var x = names.push("Jeen");
x = names.push("ivan")
console.log(names);
console.log(x); //выводит количество элементв в массиве

var y = names.pop();
console.log(names);
console.log(y);
//---------------------------------------

x = names.unshift("Ira");
console.log(names);
console.log(x);

y = names.shift();
console.log(names);
console.log(y);
//---------------------------------------

var z = names.indexOf("Ivan");
console.log(z); //-1
names.push("Jon");
console.log(names);
var z = names.indexOf("Jon");
console.log(z);

var toyota = ["Camry", 2010, "sedan", "black", true];
console.log(toyota);
var isSedan = toyota.indexOf("sedan") === -1 ? console.log("Type is not sedan"):
    console.log("Type is sedan");
//---------------------------------------
var cars = ["Honda", "Kia", "Peugeot","Mercedes","Opel", "BMW"  ];
var germanCars = cars.slice(3,5);
console.log(germanCars);
console.log(cars);