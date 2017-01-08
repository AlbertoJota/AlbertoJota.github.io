var i= 0;
var color = 0;

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
    document.getElementById("name").style.color = "#00f";
    document.getElementById("name").style.transition = "all, 3.6s";
    document.getElementById("divisor").style.borderColor = "#00f";
    document.getElementById("divisor").style.transition = "all, 3.6s";
    document.getElementById("office").style.color = "#00f";
    document.getElementById("office").style.transition = "all, 3.6s";
    myVar   =   setTimeout(red, 3600);
}

function red() {
    document.getElementById("name").style.color = "#f00";
    document.getElementById("name").style.transition = "all, 3.6s";
    document.getElementById("divisor").style.borderColor = "#f00";
    document.getElementById("divisor").style.transition = "all, 3.6s";
    document.getElementById("office").style.color = "#f00";
    document.getElementById("office").style.transition = "all, 3.6s";
    myVar   =   setTimeout(blue, 3600);
}

red();
