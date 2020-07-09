//DOM ELEMENTS MODALS

//Modal One Open from ready screen
document.getElementById('btn-ready').addEventListener('click',
function() {
    document.querySelector('.bg-modal-1').style.display = 'flex';
});
//Modal Two Open
document.getElementById('modal-1-next').addEventListener('click',
function() {
    document.querySelector('.bg-modal-2').style.display = 'flex';
});
//Modal Three Open
document.getElementById('modal-2-next').addEventListener('click',
function() {
    document.querySelector('.bg-modal-3').style.display = 'flex';
});
//Start Over button appear
document.getElementById('generate').addEventListener('click',
function() {
    document.querySelector('#restart').style.display = 'flex';
});
//Exit Screen
document.querySelector('.close-1').addEventListener('click', 
function() {
    location.reload();
});
document.querySelector('.close-2').addEventListener('click', 
function() {
    location.reload();
});
document.querySelector('.close-3').addEventListener('click', 
function() {
    location.reload();
});
//Start Over
document.getElementById('restart').addEventListener('click',
function() {
    document.querySelector('#restart').style.display = 'none';
    document.querySelector('.bg-modal-3').style.display = 'none';
    document.querySelector('.bg-modal-2').style.display = 'none';
    document.querySelector('.bg-modal-1').style.display = 'flex';
});

//DOM ELEMENTS PASSWORD GENERATOR
const passwordElement = document.getElementById('password');
const lengthElement = document.getElementById('length');
const lowercaseElement = document.getElementById('lowercase');
const uppercaseElement = document.getElementById('uppercase');
const numberElement = document.getElementById('number');
const symbolElement = document.getElementById('symbol');
const generateElement = document.getElementById('generate');


//Function with Random Character Generator Functions
const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

//Generate Password Element Event

generateElement.addEventListener('click',
function() {
    const length = +lengthElement.value; //plus sign makes string into number
    const hasLower = lowercaseElement.checked;
    const hasUpper = uppercaseElement.checked;
    const hasNumber = numberElement.checked;
    const hasSymbol = symbolElement.checked;

    passwordElement.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);  //Passing elements into result element inner text
    //console.log(length);
    //console.log(hasLower);
    //console.log(hasUpper);
    //console.log(hasNumber);
    //console.log(hasSymbol);
});
//Generate password function
function generatePassword(lower, upper, number, symbol, length) {

    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;
    //console.log('typesCount: ', typesCount);

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item =>Object.values(item)[0]);

    if(typesCount === 0) {
        return '';
    };

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
           const functionName = Object.keys(type)[0];
           //console.log('functionName: ', functionName);

           generatedPassword += randomFunction[functionName]();
        });
    };
    //console.log('typesArr: ', typesArr);
    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
};

//Functions to generate random characters
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
function getRandomSymbol() {
    const symbols = '~!@#$%^&*()_-+={}[]<>./?'
    return symbols[Math.floor(Math.random() * symbols.length)];
};
//console.log(getRandomLower());
//console.log(getRandomUpper());
//console.log(getRandomNumber());
//console.log(getRandomSymbol());