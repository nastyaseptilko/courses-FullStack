//Statement function стандартная запись функции (файл Function.js)

// function animalVoice(animal, animalName) {
//     switch (animal) {
//         case "dog" :
//             return animalName + " barks";
//         case "cat" :
//             return animalName + " meows";
//         case "pig" :
//             return animalName + " grunts";
//         default: return animalName + " makes some sounds"
//     }
//
// }
// console.log(animalVoice("dog", "Richard"));

//FunctionExpression  запись в переменную
var animalVoice = function (animal, animalName) {
    switch (animal) {
        case "dog" :
            return animalName + " barks";
        case "cat" :
             return animalName + " meows";
         case "pig" :
             return animalName + " grunts";
        default: return animalName + " makes some sounds"
    }
};
console.log(animalVoice("dog", "Richard"));

animalVoice = 19; //error , после присваивания другого значение утеряем функцию
console.log(animalVoice("dog", "Richard"));