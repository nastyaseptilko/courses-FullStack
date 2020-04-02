var userName = "Ivan";
var userAge = 11;
var isMarried = false;

if(userAge >= 20){
    console.log(userName + " is adult.")
}
else if(userAge < 10){
    console.log(userName + " is a child")
}
else if(userAge > 10 && userAge < 20 ){
    //|| или
    console.log(userName + " is a teenager")
}
else{
    console.log(userName + " is not adult.")
}

if(isMarried){
    console.log(userName + "is married");
}
else{
    console.log(userName + "maybe will married soon");
}