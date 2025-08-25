const validPin = 1234;

// function to get input values -- reusable fucntion
function getInputValueNumber(id) {
  return parseInt(document.getElementById(id).value);
}

function getInputValue(id) {
  return document.getElementById(id).value;
}

// function to get innerText
function getInnerText(id) {
  return parseInt(document.getElementById(id).innerText);
}

// function to set innerText
function setInnerText(value) {
  return (document.getElementById("balance").innerText = value);
}
// add-money
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = getInputValue("bank");
    const accountNumber = getInputValue("account-number");
    const amount = getInputValueNumber("amount");
    const pinNumber = getInputValueNumber("pin-number");
    const currentBalance = getInnerText("balance");

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
    // document.getElementById("balance").innerText = updatedBalance;
    setInnerText(updatedBalance);
  });

// cash-out
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const amount = getInputValueNumber("withdraw-amount");
  const agentNumber = getInputValue("agent-number");
  const pinNumber = getInputValueNumber("cashout-pin-number");
  const currentBalance = getInnerText("balance");
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
  // document.getElementById("balance").innerText = updatedBalance;
  setInnerText(updatedBalance);
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
