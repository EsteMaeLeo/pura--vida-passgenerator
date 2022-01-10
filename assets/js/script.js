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

  optionLowercase:{
    lowercase: false,
    position:1,
  },
  OptionUpperCase:{
    uppercase: false,
    position:0,
  },
  passwordOption: [],
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
      this.passwordOption.push(this.optionCharacter.position);
      
    }
  },

  setNumeric: function () {
    //ask if they want the numeric characters 
    this.optionNumeric.numeric = window.confirm("Click OK to confirm including numerics characters");
    if (this.optionNumeric.numeric) {
      this.optionNumeric.position = 2;
      this.counterOption++;
      this.passwordOption.push(this.optionNumeric.position);
    }
  },

  setLowercase: function () {
    //ask if they want the lowercase characters 
    this.lowercase = window.confirm("Click OK to confirm including lowercase characters");

    if (this.lowercase) {
      this.optionLowercase.position = 3;
      this.counterOption++;
      this.passwordOption.push(this.optionLowercase.position);
    }
  },

  setUppercase: function () {
    //ask if they want the uppercase characters 
    this.uppercase = window.confirm("Click OK to confirm including uppercase characters");

    if (this.uppercase) {
      this.OptionUpperCase.position = 4;
      this.counterOption++;
      this.passwordOption.push(this.OptionUpperCase.position);
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
    password.counterOption = 0;
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
  var counter = 1;
  var randomIndex = 0;
  passwordTemp = [];
  passwordUser.password2 = "";

  for (var i = 0; i < passwordUser.lengthPass; i++) {
    var optChar = randomNumber(1, passwordUser.counterOption);
    if(counter>4){
      counter=1;
    }
    counter++;
    if(counter>4){
      counter=1;
    }
  }
  console.log(passwordUser.passwordOption);
  for (var i = 0; i < passwordUser.lengthPass; i++) {
    randomIndex = passwordUser.passwordOption[Math.floor(Math.random() * passwordUser.passwordOption.length)]
    passwordTemp.push(randomIndex);
  }
  console.log(passwordTemp);
  for (var i = 0; i < passwordUser.lengthPass; i++) {
    //random to pick different character 
    var optChar = randomNumber(1, passwordUser.counterOption);
  
   // passwordUser.passwordOption.push(optChar);

    switch (optChar) {
      case passwordUser.optionCharacter.position:
        if (passwordUser.optionCharacter.character) {
          randomIndex = randomNumber(0, specialChar.length);
          //passwordUser.password.push(specialChar[randomIndex]);
          passwordUser.password2 = passwordUser.password2 + specialChar[randomIndex];
        }

    }

    /*    //if the user wants special characters
        if (passwordUser.character) {
          randomNumber(0, specialChar.length);
        }*/

  }



}

// pass the different array to return a random character
var randomPickCharacters = function (arrayChar) {
  var randomIndex = randomNumber(0, arrayChar.length);
  return arrayChar[randomIndex];
}

var generatePassword = function () {

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

