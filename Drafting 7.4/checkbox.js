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

//Form Text Elements
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');


//Form Functions
let state = {};

function startForm() {
    state = {}
    showTextNode(1)
};

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild); 
    };

    textNode.options.forEach(option => {
        if(showOption(option)) {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectOption(option));
            optionButtonsElement.appendChild(button);
        }
    });
};

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
       return startForm();
    }
    state = Object.assign(state, option.setState);
    showTextNode(nextTextNodeId);
}

//Begin Form Text Options
const textNodes = [
    {
        id: 1,
        text: 'Are you ready for a new password?',
        options: [
            {
                text: 'READY!',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Would you like upperCase characters?',
        options: [
            {
                text: 'YES',
                setState: { uppercase: true },
                nextText: 3
            },
            {
                text: 'NO',
                setState: { uppercase: false },
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'Would you like lowercase characters?',
        options: [
            {
                text: 'YES',
                setState: { lowercase: true },
                nextText: 4
            },
            {
                text: 'NO',
                setState: { lowercase: false },
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        text: 'Would you like to include numbers?',
        options: [
            {
                text: 'YES',
                setState: { numbers: true },
                nextText: 5
            },
            {
                text: 'NO',
                setState: { numbers: false },
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: 'Would you like to include symbols?',
        options: [
            {
                text: 'YES',
                setState: { symbols: true },
                nextText: 6
            },
            {
                text: 'NO',
                setState: { symbols: false },
                nextText: 6
            }
        ]
    },
    {
        id: 6,
        text: "Don't forget to use the slider to select the number of characters you'd like your password to be! ",
        options: [
            {
                text: 'Next',
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: 'Please click the generate password button below',
        options: [
            {
                text: 'Generate Password',
                nextText: 8
            }
        ]
    },
    {
        id: 8,
        text: '',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    }
]


startForm()