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
const memPlus = document.getElementById("memAdd");
const memMinus = document.getElementById("memMinus");
const memRecall = document.getElementById("memRecall");
const memClear = document.getElementById("memClear");
const home = document.getElementById("Home");
let mem = 0
let equation ='';
let num ='';

const allowedKeys = ['0','1','2', '3','4','5','6','7','8','9','+','-','*','/','.', 'Enter','Escape','%'];

document.addEventListener('keydown', function(event){
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  });

function secureEval(expression) {
    // Only allow numbers, operators, parentheses, and decimal points
    const safePattern = /^[0-9+\-*/%.() ]+$/;

    if (!safePattern.test(expression)) {
        throw new Error("Invalid characters in expression.");
    }

    try {
        // eslint-disable-next-line no-new-func
        return Function('"use strict"; return (' + expression + ')')();
    } catch (e) {
        throw new Error("Error evaluating expression.");
    }
}

home.addEventListener("click", e => {
    // Remove the saved theme from localStorage
    localStorage.removeItem('preferredTheme');
  
    // Reapply the default theme
    document.getElementById('css-theme').href = 'styles/styles.css';
});

const updateOutField= () =>{
    outField.textContent =equation;
}
const setInField = ()=>{
    inField.textContent =equation;
}

//if someone tries to start a new equation before clearing the last one it clears it first
const clearChecker= ()=>{
    if(inField.textContent!=''){
        equation='';
        updateOutField();
        setInField();
    }
}

document.addEventListener('keydown', function(event){
    if(!allowedKeys.includes(event.key)){
        event.preventDefault();
    }
})


//click listeners
memPlus.addEventListener("click",e=>{
    mem=mem+secureEval(outField.textContent);
})

memMinus.addEventListener("click", e=>{
    mem =mem-secureEval(outField.textContent);
})

memRecall.addEventListener("click",e=>{
    equation+=mem;
    num+=mem;
    updateOutField();
    
})

memClear.addEventListener("click", e=>{
    mem=0;
})

one.addEventListener("click", function(e){
    clearChecker();
    num+='1';
    equation+='1'
    console.log(equation);
    updateOutField();
})
two.addEventListener("click", e=>{
    clearChecker();
    equation+='2';
    num+='2';
    updateOutField();
})
three.addEventListener("click", e=>{
    clearChecker();
    equation+='3';
    num+='3';
    updateOutField();
})
four.addEventListener("click", e=>{
    clearChecker();
    equation+='4';
    num+='4';
    updateOutField();
})
five.addEventListener("click", e=>{
    clearChecker();
    equation+='5';
    num+='5';
    updateOutField();
})
six.addEventListener("click", e=>{
    clearChecker();
    equation+='6';
    num+='6';
    updateOutField();
})
seven.addEventListener("click", e=>{
    clearChecker();
    equation+='7';
    num+='7';
    updateOutField();
})
eight.addEventListener("click", e=>{
    clearChecker();
    equation+='8';
    num+='8';
    updateOutField();
})
nine.addEventListener("click", e=>{
    clearChecker();
    equation+='9';
    num+='9';
    updateOutField();
})
zero.addEventListener("click", e=>{
    clearChecker();
    equation+='0';
    num+='0';
    updateOutField();
})
dot.addEventListener("click", e=>{
    equation+='.';
    num+='.';
    updateOutField();
})
divide.addEventListener("click", e=>{
    equation+='/';
    num='';
    updateOutField();
})
multiply.addEventListener("click", e=>{
    equation+='*';
    num='';
    updateOutField();
})
minus.addEventListener("click", e=>{
    equation+='-';
    num='';
    updateOutField();
})
plus.addEventListener("click", e=>{
    equation+='+';
    num='';
    updateOutField();
})
clear.addEventListener("click", e=>{
    equation='';
    num='';
    updateOutField();
    setInField();
})

percent.addEventListener("click", e=>{
    let numLen = num.length;
    let percent=(+num)/100;
    equation =equation.slice(0,-numLen);
    equation+= percent;
    num = '';
    updateOutField();
    
    
})
neg.addEventListener("click", e=>{
    let numLen = num.length;
    equation =equation.slice(0,-numLen);
    num='(-'+num+')';
    equation+=num;
    num = '';
    updateOutField();
})

equals.addEventListener("click", e=>{
    setInField();
    try{
        equation = secureEval(equation);
        updateOutField();
    }
    catch{
        outField.innerHTML ='Err';
    }
    
    
})

//keyboard listeners
document.addEventListener("keydown", (event)=>{
    switch(event.key){
     case('1'):
        clearChecker();
        num+='1';
        equation+='1'
        console.log(equation);
        updateOutField();
        break;
     case('2'):
        clearChecker();
        equation+='2';
        num+='2';
        updateOutField();
        break;
     case('3'):
        clearChecker();
        equation+='3';
        num+='3';
        updateOutField();
        break;
     case('4'):
        clearChecker();
        equation+='4';
        num+='4';
        updateOutField();
        break;
     case('5'):
        clearChecker();
        equation+='5';
        num+='5';
        updateOutField();
        break;
     case('6'):
        clearChecker();
        equation+='6';
        num+='6';
        updateOutField();
        break;
     case('7'):
        clearChecker();
        equation+='7';
        num+='7';
        updateOutField();
        break;
     case('8'):
        clearChecker();
        equation+='8';
        num+='8';
        updateOutField();
        break;
     case('9'):
        clearChecker();
        equation+='9';
        num+='9';
        updateOutField();
        break;
     case('0'):
        clearChecker();
        equation+='0';
        num+='0';
        updateOutField();
        break;
     case('+'):
        equation+='+';
        num='';
        updateOutField();
        break;
     case('-'):
        equation+='-';
        num='';
        updateOutField();
        break;
     case('/'):
        equation+='/';
        num='';
        updateOutField();
        break;
     case('*'):
        equation+='*';
        num='';
        updateOutField();
        break;
     case('%'):
        let numLen = num.length;
        let percent=(+num)/100;
        equation =equation.slice(0,-numLen);
        equation+= percent;
        num = '';
        updateOutField();
        break;
     case('Enter'):
        setInField();
        try{
            equation = secureEval(equation);
        }
        catch{
            outField.innerHTML ='Err';
        }
    
        updateOutField();
        break;
     case('Escape'):
        equation='';
        num='';
        updateOutField();
        setInField();
        break;
     default:
        break;      
    }
})

    document.addEventListener('DOMContentLoaded', function() {
        // Get all theme buttons
        const themeButtons = document.querySelectorAll('.theme-button');
        // Get the stylesheet link element
        const themeStylesheet = document.getElementById('css-theme');
    
        // Function to set active theme
        function setActiveTheme(themeName) {
            // Update stylesheet href
            themeStylesheet.href = `styles/${themeName}.css`;
    
            // Update active button state
            themeButtons.forEach(button => {
                if (button.dataset.theme === themeName) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
    
            // Save preference to localStorage
            localStorage.setItem('preferredTheme', themeName);
        }
    
        // Add click event to all theme buttons
        themeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const themeName = this.dataset.theme;
                setActiveTheme(themeName);
            });
        });
    
        // Check if there's a saved theme preference, if none, set default theme
       // const savedTheme = localStorage.getItem('preferredTheme');
       // if (savedTheme) {
       //     setActiveTheme(savedTheme); // Apply saved theme
       // } else {
            setActiveTheme('calc_style'); // Apply default theme (assuming 'styles.css' is default)
       // }
    });




