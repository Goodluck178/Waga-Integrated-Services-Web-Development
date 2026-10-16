function ValidateAndCalculate() {
  let productPrice = document.getElementById("dropdown__text").value;
  let quantity = parseInt(document.getElementById("mark__input__number").value);
  let address = document.getElementById("mark__input__text").value.trim();
  let isMale = document.getElementById("male").checked;
  let isFemale = document.getElementById("female").checked;

  productPrice = parseInt(productPrice);
  let totalPrice = productPrice * quantity;

  //Validate
  if (!(isMale || isFemale)) {
    alert("please check your inputs and try again");
    return;
  }
  else if (isNaN(quantity) || (quantity < 1) || (address.trim() === "")) {
    alert("please check your inputs and try again");
    return;
  }
  else if (isNaN(totalPrice)) {
    alert("please check your inputs and try again");
    return;
  }

  // Define gender using if statement
  let gender = "";
  if (isMale) {
    gender = "Male";
  }
  else if (isFemale) {
    gender = "Female";
  }

  // Output results
  if(productPrice === 25){
    document.getElementById("productName").innerHTML = "Beginners Package " + "€" + productPrice;
  }
  else if(productPrice === 50){
    document.getElementById("productName").innerHTML = "Advanced Package " + "€" + productPrice;
  }
  document.getElementById("quantityOutput").textContent = "Quantity: " + quantity;
  document.getElementById("AddressOutput").textContent = "Address: " + address;
  document.getElementById("genderOutput").textContent = "Gender: " + gender;
  document.getElementById("totalPriceOutput").textContent = "Total Price: €" + totalPrice;

  // Show the styled output box
  document.getElementById("purchaseBox").style.display = "block";
}


function ValidateForm(){
  const fullName = document.getElementById("fName_textBox").value.trim();
  const email = document.getElementById("email_textBox").value.trim();
  const contactNumber = document.getElementById("number_textBox").value.trim();
  const textArea = document.getElementById("contact__txt").value.trim();

  if((fullName === "") || (email === "") || (contactNumber === "") || (textArea === "")){
    alert("All inputs are Mandatory. please amend your entries and try again.");
    
  }
  else {
    alert("Form submitted Successfully");
    
  }
}