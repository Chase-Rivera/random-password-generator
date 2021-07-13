var generateBtn = document.querySelector("#generate");

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numbers = ["0","1","2","3","4","5","6","7","8","9"];

var special = ["!","#","`","$","%","'","`",",","-","_",".",";",":","&","^","<",">","/","?","[","]","{","}","|","~"];

var putInto = [];



function AskQuestions() {

    var useLowercase = confirm("Would you like to use lowercase letters in your password?");
    console.log(useLowercase);

    var useUppercase = confirm("Would you like to use uppercase letters in your password?");
    console.log(useUppercase);

    var useNumbers = confirm("Would you like to use number in your password?");
    console.log(useNumbers);

    var useSpecial = confirm("Would you like to use special charaacters in your password?");
    console.log(useSpecial)


    var passwordLength = prompt("You're password must be atlest 8 characters and no longer than 128 characters.")
    while(passwordLength < 8 || passwordLength > 128){
        passwordLength = prompt("You're password must be atlest 8 characters and no longer than 128 characters.")
    }
    console.log(passwordLength);



    if (useLowercase){
        putInto.push(lowercase);
    }

    if (useUppercase){
        putInto.push(uppercase);
    }

    if (useNumbers){
        putInto.push(numbers);
    }

    if (useSpecial){
        putInto.push(special);
    }
    console.log(putInto)


}


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }


generateBtn.addEventListener("click", writePassword);
