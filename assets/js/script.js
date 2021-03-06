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
  //after display clean variables
  passwordUser.passwordOption = [];
  password: "";
  passwordUser.optionCharacter.character = false;
  passwordUser.optionNumeric.numeric = false;
  passwordUser.optionLowercase.lowercase = false;
  passwordUser.OptionUpperCase.uppercase = false;
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

  optionLowercase: {
    lowercase: false,
    position: 1,
  },
  OptionUpperCase: {
    uppercase: false,
    position: 0,
  },
  passwordOption: [],
  password: "",

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
      this.passwordOption.push(this.optionCharacter.position);

    }
  },

  setNumeric: function () {
    //ask if they want the numeric characters 
    this.optionNumeric.numeric = window.confirm("Click OK to confirm including numerics characters");
    if (this.optionNumeric.numeric) {
      this.optionNumeric.position = 2;
      this.passwordOption.push(this.optionNumeric.position);
    }
  },

  setLowercase: function () {
    //ask if they want the lowercase characters 
    this.optionLowercase.lowercase = window.confirm("Click OK to confirm including lowercase characters");

    if (this.optionLowercase.lowercase) {
      this.optionLowercase.position = 3;
      this.passwordOption.push(this.optionLowercase.position);
    }
  },

  setUppercase: function () {
    //ask if they want the uppercase characters 
    this.OptionUpperCase.uppercase = window.confirm("Click OK to confirm including uppercase characters");

    if (this.OptionUpperCase.uppercase) {
      this.OptionUpperCase.position = 4;
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

//function to generate array with random pick of options for character: special, numeric, upper and lower
//validate if there is missing option put into the array
var createArray = function (randomArray) {
  //create random numer of option to pick characters
  for (var i = 0; i < passwordUser.lengthPass; i++) {
    //different random for using the array with the set of option or criteria chose by the user
    var randomOption = passwordUser.passwordOption[Math.floor(Math.random() * passwordUser.passwordOption.length)]
    randomArray.push(randomOption);
  }
  //validate against array passwordOption if there is  missing in the new array
  var missing = 0;
  for (var i = 0; i < passwordUser.passwordOption.length; i++) {
    if (randomArray.indexOf(passwordUser.passwordOption[i]) == -1) {
      //missing.push(passwordUser.passwordOption[i]);
      missing = passwordUser.passwordOption[i];
    }
  }
  //if found a missing now check repeat number and replace with the missing
  if (missing !== 0) {
    for (var i = 0; i < randomArray.length; i++) {
      if (randomArray[i + 1] === randomArray[i]) {
        randomArray[i + 1] = missing;
        break;
      }
    }
  }

}

var createUserPass = function () {

  var randomIndex = 0;
  passwordTemp = [];
  passwordUser.password = "";

  //function to generate array with random pick of options for character
  //passing a temporal array
  createArray(passwordTemp);
  //using the new array lets pick each option
  //switch to pick option according the criteria chose by the user and concatenate to the password variable in the object
  for (var i = 0; i < passwordTemp.length; i++) {
    switch (passwordTemp[i]) {
      case passwordUser.optionCharacter.position:
        if (passwordUser.optionCharacter.character) {
          randomIndex = randomNumber(0, specialChar.length - 1);
          passwordUser.password = passwordUser.password + specialChar[randomIndex];

        }
        break;
      case passwordUser.optionNumeric.position:
        if (passwordUser.optionNumeric.numeric) {
          randomIndex = randomNumber(0, numerChar.length - 1);
          passwordUser.password = passwordUser.password + numerChar[randomIndex];
        }
        break;
      case passwordUser.optionLowercase.position:
        if (passwordUser.optionLowercase.lowercase) {
          randomIndex = randomNumber(0, abcChar.length - 1);
          passwordUser.password = passwordUser.password + abcChar[randomIndex];
        }
        break;
      case passwordUser.OptionUpperCase.position:
        if (passwordUser.OptionUpperCase.uppercase) {
          randomIndex = randomNumber(0, abcChar.length - 1);
          //use same array for lowercase but transform to uppercase using ToUpperCase
          passwordUser.password = passwordUser.password + abcChar[randomIndex].toUpperCase();
        }
        break;

    }
  }
}

// pass the different array to return a random character
var randomPickCharacters = function (arrayChar) {
  var randomIndex = randomNumber(0, arrayChar.length);
  return arrayChar[randomIndex];
}

//validation at leat choose one option
var validateOne = function () {

  while (!passwordUser.optionCharacter.character && !passwordUser.optionNumeric.numeric &&
    !passwordUser.optionLowercase.lowercase && !passwordUser.OptionUpperCase.uppercase) {

    passwordUser.setspecialChar();
    passwordUser.setNumeric();
    passwordUser.setLowercase();
    passwordUser.setUppercase();

    if (!passwordUser.optionCharacter.character && !passwordUser.optionNumeric.numeric &&
      !passwordUser.optionLowercase.lowercase && !passwordUser.OptionUpperCase.uppercase) {

        window.alert("Must select at least one character type");
    }
  }
}

var generatePassword = function () {

  passwordUser.setLengthPass();

  validateOne();
  createUserPass();
  return passwordUser.password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

