var age = prompt("Введите ваш возраст:");
var height = prompt("Введите ваш рост в метрах:");
var weight = prompt("Введите ваш вес в килограммах:");
console.log(age, height,weight );
var indexMasses = weight / height ** 2;
console.log(indexMasses)

if(age >=18 && age <= 25 && indexMasses < 17.5){
    alert("Недостаточен, опасно для здоровья");
}
else if(age >=18 && age <= 25 && indexMasses >= 17.5 && indexMasses < 19.5){
    alert("Слегка снижен, неопасно для здоровья");
}
else if(age >=18 && age <= 25 && indexMasses >= 19.5 && indexMasses<23){
    alert("Нормальный");
}
else if(age >=18 && age <= 25 && indexMasses >= 23 && indexMasses < 27.4){
    alert("У вас излишний вес:(");
}
else if(age >=18 && age <= 25 && indexMasses >= 27.4 && indexMasses<30){
    alert("Ожирение 1 степени");
}
else if(age >=18 && age <= 25 && indexMasses >= 30 && indexMasses<34.9){
    alert("Ожирение 2 степени");
}
else if(age >=18 && age <= 25 && indexMasses >= 35 && indexMasses<40){
    alert("Ожирение 3 степени");
}
else if(age >=18 && age <= 25 && indexMasses >= 40){
    alert("Ожирение 4 степени");
}

else if(age >=26 && age <= 46 && indexMasses < 18){
    alert("Недостаточен, опасно для здоровья");
}
else if(age >=26 && age <= 46 && indexMasses >= 18 && indexMasses < 20){
    alert("Слегка снижен, неопасно для здоровья");
}
else if(age >=26 && age <= 46 && indexMasses >= 20 && indexMasses<26){
    alert("Нормальный");
}
else if(age >=26 && age <= 46 && indexMasses >= 26 && indexMasses < 28){
    alert("У вас излишний вес:(");
}
else if(age >=26 && age <= 46 && indexMasses >= 28 && indexMasses<31){
    alert("Ожирение 1 степени");
}
else if(age >=26 && age <= 46 && indexMasses >= 31 && indexMasses<36){
    alert("Ожирение 2 степени");
}
else if(age >=26 && age <= 46 && indexMasses >= 36 && indexMasses<41){
    alert("Ожирение 3 степени");
}
else if(age >=26 && age <= 46 && indexMasses >= 41){
    alert("Ожирение 4 степени");
}
else{
    alert("Нет данных для вашего возраста");
}



