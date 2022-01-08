// Assignment code here
//special characters
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "\""];

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
  //validate length is between 8 and 128
  valState: true,
  character: false,
  numeric: false,
  lowercase: false,
  uppercase: false,
  setLengthPass: function () {
debugger;
    this.lengthPass = "";
    while (this.lengthPass === "" || this.lengthPass === null) {
      valLenghtPassword(passwordUser);

    }
  },

  setspecialChar: function () {
    this.character = window.confirm("Click OK to confirm including special characters");
  },

  setNumeric: function(){
    this.numeric = window.confirm("Click OK to confirm including numerics characters");
  },

  setLowercase: function(){
    this.lowercase = window.confirm("Click OK to confirm including lowercase characters");
  },

  setUppercase: function(){
    this.uppercase = window.confirm("Click OK to confirm including uppercase characters");
  }

}

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

var generatePassword = function () {
  console.log(specialChar);
  console.log(specialChar[13]);
  passwordUser.setLengthPass();
  passwordUser.setspecialChar();
  passwordUser.setNumeric();
  passwordUser.setLowercase();
  passwordUser.setUppercase();
  return passwordUser.lengthPass;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

