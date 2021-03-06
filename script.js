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



    var passwordRequirements = {
        useLowercase: useLowercase,
        useUppercase: useUppercase,
        useNumbers: useNumbers,
        useSpecial: useSpecial,
        length: passwordLength
    }

    return passwordRequirements;


}



function randomChoice(arr){
    var characters = Math.floor(Math.random() * arr.length);
    var selection = arr[characters];
    return selection;
}

function generatePassword(){
    var options = AskQuestions();
    var showResult = [];
    var availCharacters = [];
    var setCharacters = [];

    if (options.useLowercase){
        availCharacters = availCharacters.concat(lowercase);
        setCharacters.push(randomChoice(lowercase))
    }

    if (options.useUppercase){
        availCharacters = availCharacters.concat(uppercase);
        setCharacters.push(randomChoice(uppercase))
    }

    if (options.useSpecial){
        availCharacters = availCharacters.concat(special);
        setCharacters.push(randomChoice(special))
    }

    for (i=0; i<options.length; i++){
        var characters = randomChoice(availCharacters);
        showResult.push(characters)
    }

    for (i=0; i<setCharacters.length; i++){
        showResult[i] = setCharacters[i];
    }

    return showResult.join("");
}





function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }


generateBtn.addEventListener("click", writePassword);
