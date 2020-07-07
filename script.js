// Assignment Code
//const generateBtn = document.querySelector('#generate');
//const form = document.getElementById('passwordGeneratorForm')
//const passwordText = document.querySelector('#password');


// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

//DOM elements

const resultElement = document.getElementById('passwordDisplay');
const generateBtn = document.getElementById('generate');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');

////New solution
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};
//Generate Event Listen
generateBtn.addEventListener('click', () => {
    const length = +lengthElement.value;
    const hasLower = lowercaseElement.checked;
    const hasUpper = uppercaseElement.checked;
    const hasNumber = numbersElement.checked;
    const hasSymbol = symbolsElement.checked;

    resultElement.innerText = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol, 
        length
    );
});
//Generate PasswordFunction
function generatePassword(lower, upper, number, symbol, length) {
    //1. Initialize pw var
    //2. Filter out unchecked types
    //3. Loop over the length call generator function for each type
    //4. Add final password to pw var and return
    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    //console.log('typesCount: ', typesCount);
    
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter;  //curly braces make these array items true or false
    (item => Object.values(item)[0]
    );
    
    //console.log('typesArr: ', typesArr);

    if(typesCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type) [0];
            
            //console.log('funcName: ', funcName);

            generatedPassword += randomFunc[funcName] ();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}
//Generator functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

function getRandomSymbol() {
    const symbols = '!@#$%^&*()_+=-{}]["":;<>?/~'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbol());
console.log(getRandomNumber());
console.log(getRandomUpper());
console.log(getRandomLower());
