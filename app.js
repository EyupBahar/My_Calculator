const scrn = document.getElementById("scrn");
const AC = document.getElementById("AC");
const division = document.getElementById("division");
const multi = document.getElementById("multi");
const sum = document.getElementById("sum");
const minus = document.getElementById("minus");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const zero = document.getElementById("zero");
const equal = document.getElementById("equal");
const comma = document.getElementById("comma");
const sqrt = document.getElementById("sqrt");
const square = document.getElementById("square");

one.addEventListener('click',function(){
    scrn.value += "1";
})
two.addEventListener('click',function(){
    scrn.value += "2";
})
three.addEventListener('click',function(){
    scrn.value += "3";
})
four.addEventListener('click',function(){
    scrn.value += "4";
})
five.addEventListener('click',function(){
    scrn.value += "5";
})
six.addEventListener('click',function(){
    scrn.value += "6";
})
seven.addEventListener('click',function(){
    scrn.value += "7";
})
eight.addEventListener('click',function(){
    scrn.value += "8";
})
nine.addEventListener('click',function(){
    scrn.value += "9";
})
zero.addEventListener('click',function(){
    scrn.value += "0";
})
equal.addEventListener('click',function(){
    scrn.value = eval(scrn.value);
})
AC.addEventListener('click',function(){
    scrn.value = "";
})
sum.addEventListener('click',function(){
    scrn.value += "+";
})
minus.addEventListener('click', function(){
    scrn.value += "-";
})
multi.addEventListener('click', function(){
    scrn.value += "*";
})
division.addEventListener('click', function(){
    scrn.value += "/";
})
comma.addEventListener("click",function(){
    if (scrn.value.includes(".") == true){
        return false
    }
    if (scrn.value.includes(".") == false){
        scrn.value += '.'
    }  
})
square.addEventListener("click", function(){
    if (scrn.value == ""){
        return false
    }
    else if(scrn.value.includes("+") == true || scrn.value.includes("-") == true || scrn.value.includes("/") == true ||scrn.value.includes("*") == true){
        return false
    }
    else{
        scrn.value = eval(scrn.value * scrn.value)
    }
    })
sqrt.addEventListener('click',function(){
    if (scrn.value == ""){
        return false
    }
    else if(scrn.value.includes("+") == true || scrn.value.includes("-") == true || scrn.value.includes("/") == true ||scrn.value.includes("*") == true){
        return false
    }
    else{
        scrn.value = Math.sqrt(scrn.value)
    }
})