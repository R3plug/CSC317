const inField = document.getElementById("in");
const outField = document.getElementById("out");
const clear = document.getElementById("clear");
const neg = document.getElementById("neg");
const percent = document.getElementById("percent");
const divide = document.getElementById("divide");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const multiply = document.getElementById("multiply");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const minus = document.getElementById("minus");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const plus = document.getElementById("plus");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const equals = document.querySelector(".equals");
let equation ="";
const allowedKeys = [1,2,3,4,5,6,7,8,9,0,'.','Enter','/','*','+','-','=','%','Delete','click']

const updateOutField= () =>{
    outField.innerHTML =equation;
}
const setInField = ()=>{
    inField.innerHTML =equation;
}

document.addEventListener('keydown', function(event){
    if(!allowedKeys.includes(event.key)){
        event.preventDefault();
    }
})

//click listeners
one.addEventListener("click", function(e){
    equation+='1';
    console.log(equation);
    updateOutField();
})
two.addEventListener("click", e=>{
    equation+='2';
    updateOutField();
})
three.addEventListener("click", e=>{
    equation+='3';
    updateOutField();
})
four.addEventListener("click", e=>{
    equation+='4';
    updateOutField();
})
five.addEventListener("click", e=>{
    equation+='5';
    updateOutField();
})
six.addEventListener("click", e=>{
    equation+='6';
    updateOutField();
})
seven.addEventListener("click", e=>{
    equation+='7';
    updateOutField();
})
eight.addEventListener("click", e=>{
    equation+='8';
    updateOutField();
})
nine.addEventListener("click", e=>{
    equation+='9';
    updateOutField();
})
zero.addEventListener("click", e=>{
    equation+='0';
    updateOutField();
})
dot.addEventListener("click", e=>{
    equation+='.';
    updateOutField();
})
divide.addEventListener("click", e=>{
    equation+='/';
    updateOutField();
})
multiply.addEventListener("click", e=>{
    equation+='*';
    updateOutField();
})
minus.addEventListener("click", e=>{
    equation+='-';
    updateOutField();
})
plus.addEventListener("click", e=>{
    equation+='+';
    updateOutField();
})
clear.addEventListener("click", e=>{
    equation=''
    updateOutField();
    setInField();
})

percent.addEventListener("click", e=>{
    equation+='%'
    updateOutField();
})

equals.addEventListener("click", e=>{
    setInField();
    try{
        equation = eval(equation);
    }
    catch{
        outField.innerHTML ='Err';
    }
    
    updateOutField();
})

