document.getElementById("deposit-btn").addEventListener("click", function () {
  const depoField = document.getElementById("deposit-field");
  const currentDeposit = parseFloat(depoField.value);
  if (isNaN(currentDeposit)) alert("Please enter a Valid Number");

  const depoAmount = document.getElementById("deposit-text");
  const previousDeposit = parseFloat(depoAmount.innerText);

  const newDeposit = previousDeposit + currentDeposit;
  depoAmount.innerText = newDeposit;

  const balanceText = document.getElementById("balance-text");
  const currentBalance = parseFloat(balanceText.innerText);
  const newBalance = currentBalance + currentDeposit;

  if (newBalance > 0) {
    balanceText.innerText = newBalance;
  } else alert("Insufficient Balance");
  depoField.value = " ";
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdrawl-field");
  const currentWithdrawl = parseFloat(withdrawField.value);

  const withdrawlAmount = document.getElementById("withdrawl-text");
  const previousWithdrawl = parseFloat(withdrawlAmount.innerText);

  const newWithdrawl = currentWithdrawl + previousWithdrawl;
  withdrawlAmount.innerText = newWithdrawl;

  const balanceText = document.getElementById("balance-text");
  const currentBalance = parseFloat(balanceText.innerText);
  const newBalance = currentBalance - currentWithdrawl;

  if (newBalance > 0) {
    balanceText.innerText = newBalance;
  } else alert("Insufficient Balance");
  withdrawField.value = " ";
});
