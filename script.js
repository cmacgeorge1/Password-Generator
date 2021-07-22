// Assignment Code (given)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input (given)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// VAR Arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letterUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letterLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specCharacter = ["!", "%", "&", "$", "+", "-", "?", "~", "<", ">", "_"]; 
var random = Math.floor(Math.random());

// Starting the function of the button
function generatePassword() {
  var finalPassword = ""
  confirmLength = prompt("How many characters do you want your password to be? Must be between 8 and 128");
  console.log("Password length " + confirmLength)

  if(!confirmLength) {
    alert("Must Enter Appropriate Value!");
  } 
  // If user does not enter correct criteria
  else if (confirmLength < 8 || confirmLength > 128) {
    confirmLength = prompt ("Choose between 8 and 128");
    console.log("Password length " + confirmLength);
  } 
  // Prompts
  else {
    confirmNumber = confirm("Would you like to include numbers?");
    console.log("Number" + confirmNumber)
    confirmUppercase = confirm("would you like this to include capital letters?");
    console.log("Uppercase" + confirmUppercase)
    confirmLowercase = confirm("Would you like to include lowercase letters?");
    console.log("Lowercase" + confirmLowercase)
    confirmSpecChar = confirm("Would you like to include special characters?");
    console.log("Special Character" + confirmSpecChar)
  };
  // False answers
  if (!confirmNumber && !confirmUppercase && !confirmLowercase && !confirmSpecChar) {
    userChoice = alert("Choose criteria");
  } 
  // True answers
  else if (confirmNumber && confirmUppercase && confirmLowercase && confirmSpecChar) {
    userChoice = number.concat(letterUppercase, letterLowercase, specCharacter);
    console.log(userChoice);
  }
  else if (confirmNumber && confirmUppercase && confirmLowercase) {
    userChoice = number.concat(letterUppercase, letterLowercase);
    console.log(userChoice);
  }
  else if (confirmNumber && confirmUppercase && confirmSpecChar) {
    userChoice = number.concat(letterUppercase, specCharacter);
    console.log(userChoice);
  }
  else if (confirmNumber && confirmLowercase && confirmSpecChar) {
    userChoice = number.concat(letterLowercase, specCharacter);
    console.log(userChoice);
  }
  else if (confirmUppercase && confirmLowercase && confirmSpecChar) {
    userChoice = letterUppercase.concat(letterLowercase, specCharacter);
    console.log(userChoice);
  }
  else if (confirmNumber && confirmUppercase) {
    userChoice = number.concat(letterUppercase)
    console.log(userChoice);
  }
  else if (confirmNumber && confirmLowercase) {
    userChoice = number.concat(letterLowercase)
    console.log(userChoice);
  }
  else if (confirmNumber && confirmSpecChar) {
    userChoice = number.concat(specCharacter);
    console.log(userChoice);
  }
  else if (confirmUppercase && confirmLowercase) {
    userChoice = letterUppercase.concat(letterLowercase);
    console.log(userChoice);
  }
  else if (confirmUppercase && confirmSpecChar) {
    userChoice = letterUppercase.concat(specCharacter);
    console.log(userChoice);
  }
  else if (confirmLowercase && confirmSpecChar) {
    userChoice = letterLowercase.concat(specCharacter);
    console.log(userChoice);
  }
  else if (confirmNumber) {
    userChoice = number;
    console.log(userChoice);
  }
  else if (confirmUppercase) {
    userChoice = letterUppercase;
    console.log(userChoice);
  }
  else if (confirmLowercase) {
    userChoice = letterLowercase;
    console.log(userChoice);
  }
  else if (confirmSpecChar) {
    userChoice = specCharacter;
    console.log(userChoice);
  };

  for (var i = 0; i < confirmLength; i++) {
    var allChoices = userChoice[Math.floor(Math.random() * userChoice.length)];
    finalPassword = finalPassword + allChoices;
    console.log(allChoices);
  }
  
  console.log("Password: " + finalPassword);
  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
