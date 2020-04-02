// var carSeller1 = {
//     firstName: "Jack",
//     lastName: "Poece",
//     regYear: 2019,
//     hasDiscount: true,
//     discountCalculation: function (year) {
//         var discount;
//         var dateOfNow = 2020 - year;
//         if (dateOfNow <= 2) {
//             discount = 0;
//         } else if ((dateOfNow > 2) && (dateOfNow <= 5)) {
//             discount = 20;
//         } else if (dateOfNow > 5) {
//             discount = 30;
//         }
//         return discount;
//     }
// }


//THIS обращаемся к внутреннему элементу объекта
var carSeller1 = {
    firstName: "Jack",
    lastName: "Poece",
    regYear: 2018,
    hasDiscount: true,
    discount:0,
    discountCalculation: function () {
        var discount;
        var dateOfNow = 2020 - this.regYear;
        if (dateOfNow <= 2) {
            discount = 0;
        } else if ((dateOfNow > 2) && (dateOfNow <= 5)) {
            discount = 20;
        } else if (dateOfNow > 5) {
            discount = 30;
        }
        this.discount = discount;
    }
};
carSeller1.discountCalculation();
console.log(carSeller1);