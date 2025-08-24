const validPin = 1234;
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

    if (pinNumber != validPin) {
      alert("Incorrect pin!");
      return;
    }

    const updatedBalance = currentBalance + amount;
    document.getElementById("balance").innerText = updatedBalance;
  });
