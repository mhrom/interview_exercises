var input = 'qwerty@!@@@';
var inputArray = [];
inputArray = input.split('');

function isPasswordValid(input){
  if ((hasUpperCase(inputArray) && hasLowerCase(inputArray) && isLongEnough(inputArray) && hasSpecialCharacter(inputArray))){
    console.log('Password is valid');
  if ((hasUpperCase(inputArray) || hasLowerCase(inputArray) || isLongEnough(inputArray) || hasSpecialCharacter(inputArray)) === false){
    console.log('\nPlease check your password inluded upper, lower, special characters and is long enough.');
    }
  }
}

function hasUpperCase(inputArray){
  var result = [];
  var serachStatus = 0;
  for (var l = 0; l < inputArray.length; l++){
    if (inputArray[l] === inputArray[l].toUpperCase()){
        result.push(true);
        }else{
        result.push(false);
        }
    }
  for (i = 0; i < result.length; i++){
    if (result[i] === true){
      return true;
      searchStatus = true;
      }  
    }
    return false;
}

            
function hasLowerCase(inputArray){
  var result = [];
  var serachStatus = 0;
  for (var l = 0; l < inputArray.length; l++){
    if (inputArray[l] === inputArray[l].toLowerCase()){
        result.push(true);
        }else{
        result.push(false);
        }
    }
  for (i = 0; i < result.length; i++){
    if (result[i] === true){
      return true;
      searchStatus = true;
      }  
    }
    return false;
 }
      

function isLongEnough(inputArray){
  if (inputArray.length > 8){
    return true;
  }else{
    return false;
  }
}

function hasSpecialCharacter(inputArray){
  var specialCharacters = ['\\','$','@','#','&','!','%','^','*','(',')'];
  var result = [];
  var serachStatus = 0;
  for (var l = 0; l < inputArray.length; l++){
    for (var s = 0; s < specialCharacters.length; s++){
      if (inputArray[l] === specialCharacters[s]){
        console.log(inputArray[l]);
        result.push(true);
      }else{
        result.push(false);
      }
    }
  }
  for (i = 0; i < result.length; i++){
    if (result[i] === true){
      return true;
      searchStatus = true;
      }  
    }
    return false;
  }

isPasswordValid(inputArray);
