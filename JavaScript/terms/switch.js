var section = "html5";

switch(section) {
    case "html":
    case "html5":
        console.log("ВЫ учите раздел html");
        break;
    case "css":
        console.log("ВЫ учите раздел css");
        break;
    case "javascript":
        console.log("ВЫ учите раздел javascript");
        break;
    default: console.log("ВЫ учите раздел не известный")
}

var age = 20;
var groupNumber;

switch (true) {
    case age >= 18 && age <= 25:
        groupNumber =1;
        break;
    case age > 25 && age <= 46:
        groupNumber = 2;
        break;
    default: groupNumber =3;
}
console.log(groupNumber);