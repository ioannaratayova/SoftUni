function checkPassword(password) {
    let lengthOK = password.length >= 6 && password.length <= 10;
    let onlyLettersAndDigits = true;
    let digitCount = 0;
  
    for (let i = 0; i < password.length; i++) {
      let charCode = password.charCodeAt(i);
      if (charCode < 48 || (charCode > 57 && charCode < 65) || (charCode > 90 && charCode < 97) || charCode > 122) {
        onlyLettersAndDigits = false;
        break;
      }
      if (charCode >= 48 && charCode <= 57) {
        digitCount++;
      }
    }
  
    let atLeastTwoDigits = digitCount >= 2;
  
    if (!lengthOK) {
      console.log("Password must be between 6 and 10 characters");
    }
    if (!onlyLettersAndDigits) {
      console.log("Password must consist only of letters and digits");
    }
    if (!atLeastTwoDigits) {
      console.log("Password must have at least 2 digits");
    }
    if (lengthOK && onlyLettersAndDigits && atLeastTwoDigits) {
      console.log("Password is valid");
    }
  }