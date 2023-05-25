// Start point
document.getElementById("okButton").addEventListener(
  "click",
  () => {
    //WHEN I click the button to generate a password
    //THEN I am presented with a series of prompts for password criteria
    document.getElementById("startingPoint").hidden = true;
    document.getElementById("passwordCreteria").hidden = false;
  },
  false
);
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters

function lengthRequirements() {
  // fuction to define password lenght
  var passwordLength = document.getElementById("passwordLenght").value;
  if (passwordLength > 128) {
  // functionality to not let the password go over 128
    alert(
      "Password length must be a number between 8-128 characters.\nPassword length now: 128"
    );
    document.getElementById("passwordLenght").value = 128;
  } else if (passwordLength < 8) {
     // functionality to not let the password go below 8
    alert(
      "Password length must be a number between 8-128 characters.\nPassword length now: 8"
    );
    document.getElementById("passwordLenght").value = 8;
  }
}

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

const lowercase = "abcdefghijklmnopqrstuvwxyz";
var characters = lowercase;
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include uppercase

function uppercase() {
  var checkBox1 = document.getElementById("uppercase");

  if (checkBox1.checked == true) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    characters = characters.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "");
  }
}
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include numbers

function numbers() {
  var checkBox2 = document.getElementById("numbers");

  if (checkBox2.checked == true) {
    characters += "123456789";
  } else {
    characters = characters.replace("123456789", "");
  }
}

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include special characters

function specialCharacters() {
  var checkBox3 = document.getElementById("specialCharacters");

  if (checkBox3.checked == true) {
    characters += "!@#$%^&*()<>?,.+=";
  } else {
    characters = characters.replace("!@#$%^&*()<>?,.+=", "");
  }
}
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
function generatePassword() {
  var length = document.getElementById("passwordLenght").value;
  var result = "";
  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  document.getElementById("password").innerHTML = result;
}


