var i= 0;
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

red();