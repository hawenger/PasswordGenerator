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
    document.querySelector('.bg-modal-1').style.display = 'none';
});
document.querySelector('.close-2').addEventListener('click', 
function() {
    document.querySelector('.bg-modal-2').style.display = 'none';
    document.querySelector('.bg-modal-1').style.display = 'none';
});
document.querySelector('.close-3').addEventListener('click', 
function() {
    document.querySelector('.bg-modal-3').style.display = 'none';
    document.querySelector('.bg-modal-2').style.display = 'none';
    document.querySelector('.bg-modal-1').style.display = 'none';
});


//Start Over
document.getElementById('restart').addEventListener('click',
function() {
    document.querySelector('#restart').style.display = 'none';
    document.querySelector('.bg-modal-3').style.display = 'none';
    document.querySelector('.bg-modal-2').style.display = 'none';
    document.querySelector('.bg-modal-1').style.display = 'flex';
});


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
