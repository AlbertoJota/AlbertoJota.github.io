var i= 0;
var color = 0;
var color1 = "gray";
var color2 = "white";
setInterval(
    function() {
        i=i+0.1;
        document.getElementById("ying-yang").style.transform = "rotate("+i+"deg)";
        if (i >=720.0){
            i=360;
        }
    },
    1);
function blue() {
    document.getElementById("name").style.color = "blue";
    document.getElementById("name").style.transition = "all, 3.6s";
    document.getElementById("divisor").style.borderColor = "blue";
    document.getElementById("divisor").style.transition = "all, 3.6s";
    document.getElementById("office").style.color = "blue";
    document.getElementById("office").style.transition = "all, 3.6s";
    myVar   =   setTimeout(red, 3600);
}

function red() {
    document.getElementById("name").style.color = "red";
    document.getElementById("name").style.transition = "all, 3.6s";
    document.getElementById("divisor").style.borderColor = "red";
    document.getElementById("divisor").style.transition = "all, 3.6s";
    document.getElementById("office").style.color = "red";
    document.getElementById("office").style.transition = "all, 3.6s";
    myVar   =   setTimeout(blue, 3600);
}

function grad() {
    document.getElementById("grad").style.background= "-moz-linear-gradient("+color+"deg, "+color1+", "+color2+")";
    document.getElementById("grad").style.background= "-o-linear-gradient("+color+"deg, "+color1+", "+color2+")";
    document.getElementById("grad").style.background= "background: -moz-linear-gradient("+color+"deg, "+color1+", "+color2+")";
    document.getElementById("grad").style.background= "linear-gradient("+color+"deg, "+color1+", "+color2+")";
    document.getElementById("grad").style.transition = "all, 3.6s";
    color++;
    if(color>=360){
        color = color*(-1);
    }
    myVar = setTimeout(grad, 3600);
    if(color1=="gray"){
        color1 = "orange";
        color2 = "gray";
    }
    else {
        color1 = "gray";
        color2 = "white";
    }
}

red();
