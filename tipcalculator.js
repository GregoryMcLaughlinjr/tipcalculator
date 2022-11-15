function calculateTip() {   
let billAmount = document.getElementById('calculatorInnerShell__input--billAmount').value;
let tipPercent = document.getElementById('calculatorInnerShell__input--tipAmount').value;


var x = billAmount;
var y = tipPercent;
 
  let tipAmount = x * y / 100;
  let n = tipAmount.toFixed(2);
  document.getElementById('calculatedAmounts__tipAmount').innerHTML = "$" + n;
  
  let totalBill = parseFloat(billAmount) + parseFloat(tipAmount);
  let m = totalBill.toFixed(2);
  document.getElementById('calculatorInnerShell__totalBillAmount').innerHTML = "$" + m;
}

function calculateSplit() {
  let billAmount = document.getElementById('calculatorInnerShell__input--billAmount').value;
  let tipPercent = document.getElementById('calculatorInnerShell__input--tipAmount').value;
  let guests = document.getElementById('splitTheBillInnerShell__input--numberOfGuests').value;


var x = billAmount;
var y = tipPercent;
 
  let tipAmount = x * y / 100;
  let n = tipAmount.toFixed(2);
  
  
  let totalBill = parseFloat(billAmount) + parseFloat(tipAmount);
  let m = totalBill.toFixed(2);
  
  let splitBill = parseFloat(totalBill) / parseFloat(guests);
  let l = splitBill.toFixed(2);

  document.getElementById('splitTheBillInnerShell__tipAmount').innerHTML = '$' + l;
  
}










