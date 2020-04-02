var d1 = document.getElementById("d1")
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");
var d4 = document.getElementById("d4");
var d5 = document.getElementById("d5");
var d6 = document.getElementById("d6");

document.getElementById('d2').hidden = true;
document.getElementById('d3').hidden = true;
document.getElementById('d4').hidden = true;
document.getElementById('d5').hidden = true;
document.getElementById('d6').hidden = true;

d1.addEventListener("click", function () {
    timer();
    document.getElementById('d2').hidden = false;
    document.getElementById('d1').hidden = true;
    timer()
});
d2.addEventListener("click", function () {
    timer();
    document.getElementById('d3').hidden = false;
    document.getElementById('d2').hidden = true;
});
d3.addEventListener("click", function () {
    timer();
    document.getElementById('d4').hidden = false;
    document.getElementById('d3').hidden = true;
});
d4.addEventListener("click", function () {
    timer();
    document.getElementById('d5').hidden = false;
    document.getElementById('d4').hidden = true;
});
d5.addEventListener("click", function () {
    timer();
    document.getElementById('d6').hidden = false;
    document.getElementById('d5').hidden = true;
});
d6.addEventListener("click", function () {
    timer();
    document.getElementById('d1').hidden = false;
    document.getElementById('d6').hidden = true;
});

var time;
var timeAfterClick;
var a;

function timer() {

    var id = document.getElementById("time");
    timeAfterClick = performance.now() - time;
    time = performance.now();
    a = timeAfterClick * 0.001;
    id.innerHTML = a;
}
