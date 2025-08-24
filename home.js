const validPin = 1234;
// add-money
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("amount").value);
    const pinNumber = parseInt(document.getElementById("pin-number").value);
    const currentBalance = parseInt(
      document.getElementById("balance").innerText
    );

    // console.log(bank, accountNumber, amount, pinNumber);
    // console.log(balance);

    if (accountNumber.length < 11) {
      alert("Provide valid account number!");
      return;
    }

    if (pinNumber !== validPin) {
      alert("Incorrect pin!");
      return;
    }

    const updatedBalance = currentBalance + amount;
    document.getElementById("balance").innerText = updatedBalance;
  });

// cash-out
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const amount = parseInt(document.getElementById("withdraw-amount").value);
  const agentNumber = document.getElementById("agent-number").value;
  const pinNumber = parseInt(
    document.getElementById("cashout-pin-number").value
  );
  const currentBalance = parseInt(document.getElementById("balance").innerText);
  // console.log(amount, currentBalance);
  if (agentNumber.length < 11) {
    alert("Enter vald agent number");
    return;
  }

  if (pinNumber !== validPin) {
    alert("Incorrect pin!");
    return;
  }

  const updatedBalance = currentBalance - amount;
  document.getElementById("balance").innerText = updatedBalance;
});

// toggling
document.getElementById("add-btn").addEventListener("click", function () {
  document.getElementById("cash-out-section").style.display = "none";
  document.getElementById("add-money-section").style.display = "block";
});

document.getElementById("cashout-btn").addEventListener("click", function () {
  document.getElementById("add-money-section").style.display = "none";
  document.getElementById("cash-out-section").style.display = "block ";
});
