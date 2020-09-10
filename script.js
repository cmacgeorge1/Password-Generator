// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// TODO create generate password function that returns the fianl password and all of my code should live inside this fucntion

// TODO create promt to ask the length of the password and save it as a VAR (prompt and variable )

// TODO creat a Confirm to ask user if they want lowercase characters

// TODO creat a Confirm to ask user if they want uppercase characters

// TODO creat a Confirm to ask user if they want numbers characters

// TODO creat a Confirm to ask user if they want special characters

// Add validations to make sure at least one type of character is slelected


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
