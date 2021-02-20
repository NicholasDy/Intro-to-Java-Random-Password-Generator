// Assignment Code
var generateBtn = document.querySelector("#generate");
// key needed for the arrays to gather randomized data from the generators
var optionsKeys = {
  lowercase: getRandomlower,
  uppercase: getRandomUpper,
  numbers: getRandomNumber,
  specialchar: getRandomSpecialChar
}

// Writes a password to the #password input
function writePassword() {
  var generatedPassword = ""
  window.alert("We are going to ask you a series of questions to help customize your password.")

  // questions to establish the parameters of the password to be generated
    var messageforlength = ("Please input how long you want your password. Min is 8 characters and max is 128.")
    var passwordL = parseInt(window.prompt(messageforlength))
    var logicTest = passwordL >= 8 && passwordL <= 128
        if (!logicTest) {
        window.alert("Please select the correct parameters!")
        return;
      } 
    var lowercase = window.confirm("Do you want lowercase letters?")
    var uppercase = window.confirm("Do you want Uppercase letters?")
    var numbers = window.confirm("Do you want any Numbers?")
    var specialchar = window.confirm("Do you want Special Characters?")
    
  // what happens when a person puts in nothing for the other characters 
    if (lowercase === false && 
      uppercase === false && 
      numbers === false && 
      specialchar === false)
        {
          window.alert("You have chosen cancel on all parameters, there is no password to give you. Have a nice day!")
          return;
        }
  
  // var's given to us for the homework
    var password = generatePassword(lowercase, uppercase, numbers, specialchar, passwordL);
    var passwordText = document.querySelector("#password");
      passwordText.value = password;


// generate passwordfunction which takes the data from the array at the top (all advanced stuff that I went and tried to learn but found online and got to work with my code)
  function generatePassword() {
    const typesCount = lowercase + uppercase + numbers + specialchar;
    const typesArry = [{lowercase}, {uppercase}, {numbers}, {specialchar}].filter(item =>Object.values(item)[0]);
    for(i = 0; i <= passwordL; i += typesCount){
      typesArry.forEach(type =>{
        var options = Object.keys(type)[0];
        generatedPassword += optionsKeys[options]();
      });
    };
    var finaloutput = generatedPassword;
    return finaloutput;
  }  
}

// these are the functions for the creating a value for the password
  function getRandomlower (){
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
  };  
  function getRandomUpper (){
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
  };
  function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
  }
  function getRandomSpecialChar(){
    const symbols = "!@#%&'()*+-/:;<=>?"
    return symbols[Math.floor(Math.random()*symbols.length)];
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

