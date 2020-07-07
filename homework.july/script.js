// Assignment Code
let generateBtn = document.querySelector("#generate");

const characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: '!;,.%/(){}#+-:_"@|`$=*^[]?&~'
};

// Write password to the #password input
function writePassword() {
    

  //let characterCount = prompt("How many characters (8-128) would you like your password to be?");
  //alert("I'm going to ask you a few more questions about your new password! Click 'Okay' for 'Yes' & 'Cancel' for 'No' on the following prompts.");
  //let uppercase = confirm("Do you want uppercase letters to be included in your password?");
  //let lowercase = confirm("Do you want lowercase letters to be included in your password?");
  //let numbers = confirm("Do you want numbers to be included in your password?");
  //let specialCharacters = confirm("Do you want any special charcters (*,&% etc.) to be included in your password?");

  //let length = characterCount.value

  //}

  //if (uppercase) {


  //}

  //if (lowercase) {
      
  //}

  //if (numbers) {
      
  //}

  //if (specialCharacters) {
      
  //}  



  let password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
