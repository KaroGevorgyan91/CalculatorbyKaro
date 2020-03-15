
class Calculator {
    constructor (previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear(){                          // function is clearing everything from the calculator display
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1) //used String's method for removing character
    }
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return //check if '.' already typed 
        this.currentOperand = this.currentOperand.toString() + number.toString() //concat
    }
    chooseOperation(operation){
        if(this.currentOperand === '') return //if nothing was types 
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''

    }
    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
       if (isNaN(integerDigits)){
           integerDisplay = ''
       } else {
           integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
       }
        
       if(decimalDigits != null){
           return `${integerDisplay}.${decimalDigits}`
       } else {
           return integerDisplay
       }
       }
        // const floatNumber = parseFloat(number)
        // if(isNaN(floatNumber)) return ''
        // return floatNumber.toLocaleString("en")
    
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if(this.operation != null){
            this.previousOperandTextElement.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }else{
            this.previousOperandTextElement.innerText =''
        }
        

    }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator (previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button =>{
    button.addEventListener("click", ()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button =>{
    button.addEventListener("click", ()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener("click", button =>{
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener("click", button =>{
    calculator.clear()
    calculator.updateDisplay()
})


deleteButton.addEventListener("click", button =>{
    calculator.delete()
    calculator.updateDisplay()
})








//             async ////////// Karo Gevorgyan

// console.log("Start");
// console.log("Start 2");

// window.setTimeout(function(){
//     console.log("Inside timeout, after 2 seconds")
// }, 2000);

// console.log("END")    // =>>>>>>>>>>>>>>>> Browser interpreter the script and finds there 'cosnole.log' and added it to stack and do.....then it finds that there is setTimeout
                       /// and registered it that it should be done after 2 secs



                       /// Objects Karo ////

const person = Object.create(
    {
        calculateAge (){
        console.log("Age:", new Date().getFullYear() - this.birthYear)
        }
    },

    {
        name: {
            value: "Mariam",
            enumerable: true, // if false you can't run loop for it and see keys of the object
            writable: true, //if false and by default the writable is false which means that you can't change the object.
            configurable: true,//it is by default false, so if true it is alow us to delete any key from the object 

            },
        birthYear: {    
            value: 1993,
            enumerable: false,
            writable: false,
            configurable: false
        },
        age: {
            get(){
                return new Date().getFullYear() - this.birthYear
            },
            set(value){
                console.log("Set age", value)
            }
        }
    }
)

// person.name = "Maxim"

//console.log(person)

     for (let key in person){
         if(person.hasOwnProperty(key)){
            console.log("Key", key, person[key])
         }
         
     };



     //Case when for loop will work and will show us the keys for person1 //

    //  const person1 = {
    //      name: "Karo",
    //      birthYear: 1991
    //  };
    //  for (let key in person1){
    //     console.log("Key", key)
    // };