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