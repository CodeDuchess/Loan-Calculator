
function computeLoan() {
 // the amount the borrower desires	
  var amount = document.getElementById('amount').value;
  var interest_rate = document.getElementById("interest_rate").value;
  // relates to months to pay
  var months = document.getElementById("months").value;
  // .01 gives it two decimal places
  var interest = (amount * (interest_rate * .01)) / months;
  // the borrower's monthly payment - toFixed allows for two decimal places
  var payment = ((amount / months) + interest).toFixed(2);
  // convert format into money; /B looks in a word boundary; ?= tells it to find 3 digits in a row and place a comma
  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // displays output
  document.getElementById("payment").innerHTML = "Monthly Payment = $" + payment;

}