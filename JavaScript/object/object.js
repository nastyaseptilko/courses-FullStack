// var carToyota = ["Camry", 2010, "sedan", "black", true];
// console.log(carToyota[1]);
// var carMazda = ["Cx7", 2015, "crossover", "red", false];

//1 способ
var carToyota = {
    model:"Camry",
    year: 2010,
    carBody: "sedan",
    color:"black",
    hasAirbag:true
};
var x = "color";
console.log(carToyota.model);//2 формы записи
console.log(carToyota["color"]);
console.log(carToyota[x]);

carToyota.color = "red";
carToyota.year += 2;
console.log(carToyota);

//2 способ
var carMazda = {};
carMazda.year = 2019;
carMazda.color = "blue";
carMazda.model = "crossover";
console.log(carMazda);

//3 способ
var carOpel = new Object();
carOpel.model = "hah";
carOpel.year = 2019;
carOpel.color = "green";
console.log(carOpel);

//------------------------------------------------------------------
var colors = ["red", "green", "blue"];
var personJack = {
    firstName : "Jack",
    lastName : "Petrov",
    age: 23,
    pets: ["cat","dog",'snake']
};
var numbers = [[1,2,3],[4,5,6],[7,8,9,10]];
console.log(numbers[1][2]);

console.log(personJack.pets[1]);

var sellers = [
    {
        firstName:"Nastya",
        lastName:"Septilko",
        regDate:"09.07.2020",
        hasDiscount:true,
        cars:["Opel", "Porsh", "BMW"]
    },
    {
        firstName:"Ira",
        lastName:"Ivanob",
        regDate:"13.07.2020",
        hasDiscount:false,
        cars:[{
            marka:"Mazda",
            carProducer:"fiat"
        }, {
            marka:"Opel",
            carProducer:"punto"
        }, {
            marka:"BMW",
            carProducer:"fiat"
        }]
    }

];
console.log(sellers[1].cars[2].carProducer);