var cars = [{
    model:"Opel",
    year: 2010,
    color:"black",
    isSoldOut:true
}, {
    model:"Bmw",
    year: 2013,
    color:"gray",
    isSoldOut:false
}, {
        model:"Mazda",
        year: 2016,
        color:"green",
        isSoldOut:false
},{
    model:"Ford",
    year: 2018,
    color:"red",
    isSoldOut:true
}

];
// for(var i = 0;i<cars.length;i++){
//     if(cars[i].isSoldOut===false){
//         console.log(cars[i]);
//     }
// }
cars.forEach(function(car){
    if(car.isSoldOut===false){
        console.log(car);
    }
});
