//var input = 'qert123QW';
var input = prompt('Type your password!');
var inputArray = [];
inputArray = input.split('');

function isPasswordValid(inputArray){
  var UpperCase = hasUpperCase(inputArray);
  var LowerCase = hasLowerCase(inputArray);
  var SpecialCharacter = hasSpecialCharacter(inputArray);
  var LongEnough = isLongEnough(inputArray);    //console.log(UpperCase,LowerCase,SpecialCharacter,LongEnough);
  if ((UpperCase && LowerCase) && (LongEnough && SpecialCharacter)){
    console.log('Password is valid');
  }else{
   console.log('\nPlease check your password inluded upper, lower, special characters and that it is long enough.'); 
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
