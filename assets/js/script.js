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


var passwordUser = {
  lengthPass: "",
  //validate length is between 8 and 128
  valState: true,
  lowcase: "",
  getLengthPass: function () {
    debugger;
    this.lengthPass = "";
    while (this.lengthPass === "" || this.lengthPass === null) {

      this.lengthPass = prompt("Please enter the length of the password at least 8 characters and no more than 128 characters?")

      //validate if value is not empty convert value to integer
      if (this.lengthPass !== "" && this.lengthPass !== null) {
        //convert the value to integer
        this.lengthPass = parseInt(this.lengthPass);
        if (this.lengthPass < 8 || this.lengthPass > 128) {
          window.alert("Length of the password does not meet criteria");
          //clear value to keep loop until input the correct lenght of the password
          this.lengthPass = "";
        }
      }


    }
  }
}

var generatePassword = function () {
  console.log(specialChar);
  console.log(specialChar[13]);
  passwordUser.getLengthPass();
  return passwordUser.lengthPass;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

