// Assignment code here
//special characters
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "\""];
var numerChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var abcChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//object password
var passwordUser = {
  lengthPass: "",
  optionCharacter: {
    character: false,
    //if user want add special char set index in order to pick random
    position: 0,
  },
  optionNumeric: {
    numeric: false,
    position: 0,
  },
  
  lowercase: false,
  uppercase: false,
  password: [],
  password2: "",
  counterOption: 0,
  setLengthPass: function () {
    // set the password lenght and validate the correct value
    this.lengthPass = "";
    while (this.lengthPass === "" || this.lengthPass === null) {
      //call to validate lenght of the password
      valLenghtPassword(passwordUser);

    }
  },

  setspecialChar: function () {
    //ask if they want the special characters 
    this.optionCharacter.character = window.confirm("Click OK to confirm including special characters");
    //if Yes set index 1 this will help set random different characters
    if (this.optionCharacter.character) {
      this.optionCharacter.position = 1;
      this.counterOption++;
    }
  },

  setNumeric: function () {
    //ask if they want the numeric characters 
    this.optionNumeric.numeric = window.confirm("Click OK to confirm including numerics characters");
    if (this.optionNumeric.numeric) {
      this.optionNumeric.position = 2;
      this.counterOption++;
    }
  },

  setLowercase: function () {
    //ask if they want the lowercase characters 
    this.lowercase = window.confirm("Click OK to confirm including lowercase characters");

    if (this.lowercase) {
      this.counterOption++;
    }
  },

  setUppercase: function () {
    //ask if they want the uppercase characters 
    this.uppercase = window.confirm("Click OK to confirm including uppercase characters");

    if (this.uppercase) {
      this.counterOption++;
    }
  }

}
//validate if is not empty or null convert to integer and validate the lenght of the password
var valLenghtPassword = function (password) {
  password.lengthPass = prompt("Please enter the length of the password at least 8 characters and no more than 128 characters?")

  //validate if value is not empty convert value to integer
  if (password.lengthPass !== "" && password.lengthPass !== null) {
    //convert the value to integer
    password.lengthPass = parseInt(password.lengthPass);
    if (password.lengthPass < 8 || password.lengthPass > 128) {
      window.alert("Length of the password does not meet criteria");
      //clear value to keep loop until input the correct lenght of the password
      password.lengthPass = "";
    }
  }
}

// function to generate a random numeric value
var randomNumber = function (min, max) {

  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};


var createUserPass = function () {

  var randomIndex = 0;

  for (var i = 0; i < passwordUser.lengthPass; i++) {
    //random to pick different character 
    var optChar = randomNumber(1, passwordUser.counterOption);
    console.log(optChar);
    switch (optChar) {
      case passwordUser.optionCharacter.position:
        if (passwordUser.optionCharacter.character) {
          randomIndex = randomNumber(0, specialChar.length);
          //passwordUser.password.push(specialChar[randomIndex]);
          passwordUser.password2 = passwordUser.password2 + specialChar[randomIndex];
        }

    }

    //if the user wants special characters
    if (passwordUser.character) {
      randomNumber(0, specialChar.length);
    }

  }

}

//
var randomPickCharacters = function () {

}

var generatePassword = function () {
  console.log(specialChar);
  console.log(specialChar[13]);
  passwordUser.setLengthPass();

  passwordUser.setspecialChar();
  passwordUser.setNumeric();
  passwordUser.setLowercase();
  passwordUser.setUppercase();
  debugger;
  createUserPass();
  return passwordUser.password2;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

