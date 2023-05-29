// Handle User Input
const inputValidationItem = (id) => {
  let userInput = document.getElementById(id).value;
  return userInput;
};

// Clear Input Field
const clearInputField = () => {
  document.getElementById("input-name").value = "";
  document.getElementById("input-zipCode").value = "";
  document.getElementById("input-email").value = "";
  document.getElementById("input-phoneNumber").value = "";
};

// Show Output
const showOutput = (content) => {
  let div = document.getElementById("show-output");
  let p = document.createElement("p");
  p.textContent = `This is a ${content}`;
  div.appendChild(p);
};

// Main Validation Functionality
const informationValidate = () => {
  // User Input Value
  let fullName = inputValidationItem("input-name");
  let zipCode = inputValidationItem("input-zipCode");
  let email = inputValidationItem("input-email");
  let phoneNumber = inputValidationItem("input-phoneNumber");

  //   Validate Information
  const validateInfo = (regx, phoneNumber, validText) => {
    var result = regx.test(phoneNumber);
    if (result == true) {
      showOutput(validText);
      console.log(`This is a ${validText}`);
    } else {
      console.log(`This is not a ${validText}`);
    }
  };

  validateInfo(/^[a-zA-Z][0-9a-zA-Z .,'-]*$/, fullName, "Valid Name!");
  validateInfo(/^[0-9]{4}$/, zipCode, "valid Zip Code!");
  validateInfo(
    /^[\w]*@*[a-z]*\.*[\w]{5,}(\.)*(com)*(@gmail\.com)/,
    email,
    "valid Email Address!"
  );
  validateInfo(/^(\+)?(88)?01[0-9]{9}$/, phoneNumber, "valid Phone Number!");

  //   Clear the input fields
  clearInputField();
};

// Button Click Event
let btn = document.getElementById("handle-submit");
btn.addEventListener("click", informationValidate);
