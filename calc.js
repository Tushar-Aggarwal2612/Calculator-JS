window.addEventListener("load", initEvents);

var exp;
// var opr;
var span;
function initEvents(){
    exp = document.getElementById("box");
    span= document.getElementById("toCalculate");
    buttons = document.getElementsByClassName("btn");
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", buildExp);
    }
    // span.innerHTML+=exp.value;
    document.getElementById("calculate").addEventListener("click", calc);
    Clear=document.getElementById("Clearit").addEventListener("click",ClearAll);
}

function buildExp() {
    exp.value += event.srcElement.innerHTML;
    console.log(exp.value);
    span.innerHTML=exp.value;
}

function calc() {
    var result = eval(exp.value);
    exp.value = result;
    span.innerHTML="";
}
function ClearAll(){
    document.getElementById("box").value='';
    span.innerHTML="";

}
