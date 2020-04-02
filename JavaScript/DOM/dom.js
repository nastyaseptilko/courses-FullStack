//document.getElementById("header").innerHTML = "New value";


var x = document.getElementsByClassName("firstThreeElements");
console.log(x);
console.log(x[0].innerHTML);


var y = document.getElementsByTagName("li");
console.log(y);
console.log(y[1].innerHTML);
console.log(document.getElementsByTagName("body")[0]);


//если много элементов в кл\айди\теге выводиться толкьо первый из них
console.log(document.querySelector("#header").innerHTML);
console.log(document.querySelector(".anotherElements").innerHTML);
console.log(document.querySelector("li").innerHTML);


//этот метод позвонялет вывести все элементы содержащиеся в объекте
console.log(document.querySelectorAll("li"));
console.log(document.querySelectorAll("li")[1].innerHTML);
//console.log(document.querySelectorAll(".firstThreeElements")[2].innerHTML);

//Task_6

console.log((document.getElementsByClassName("firstThreeElements"))[2].innerHTML);
var a = document.getElementsByTagName("li");
console.log(a[2].innerHTML);
console.log(document.querySelector("#thirdElement").innerHTML);
console.log(document.querySelectorAll(".firstThreeElements")[2].innerHTML);

// var h1 = document.getElementsByTagName("h1");
// console.log(h1[0].textContent);

var ul = document.getElementsByTagName("ul");
console.log(ul[0].innerHTML);

var li = document.getElementsByTagName("li");
console.log(li[0].innerHTML);
li[0].innerHTML = "The <strong>html</strong> elements as object";//если  вместо innerHTML укажем textContent, стронг не примениться
console.log(li[0].innerHTML);

//STYLE ELEMENT
var li3 = document.getElementById("thirdElement");
// li3.style.color = "red";
// li3.style.background = "yellow";
// li3.style.fontSize = "40px";
li3.classList.add("stylish");
//li3.classList.remove("stylish");
//добавление класса в возвращением булеан значения , если класс есть false, если есть то true и добавляеет его
li3.classList.toggle("stylish");

var image = document.getElementsByTagName("img");
image[0].getAttribute("src");
image[0].setAttribute("src", "image.jpg");

var link = document.getElementsByTagName("a");
console.log(link[0].getAttribute("href"));
link[0].setAttribute("href", "https://vk.com/nastya_septilko");

//EVENT
var h1 = document.getElementById("header");
console.log(h1.innerHTML);
h1.addEventListener("click", function () {
    h1.style.background = "red";//this.style.background = "red";
});
h1.addEventListener("click", function () {
    h1.style.color = "blue";
});

var liElements = document.querySelectorAll("li");
var changeLiColor = function () {
    this.style.color = "pink";
};
for(var i =0; i <liElements.length; i++){
    liElements[i].addEventListener("click",changeLiColor)
}