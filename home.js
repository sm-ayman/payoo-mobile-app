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

// function to toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// function to handle active form-btn
function handleActive(id) {
  const formBtn = document.getElementsByClassName("form-btn");
  for (const btn of formBtn) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  document.getElementById(id).classList.remove("border-gray-300");
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
  // document.getElementById("cash-out-section").style.display = "none";
  // document.getElementById("transfer-money-section").style.display = "none";
  // document.getElementById("add-money-section").style.display = "block";
  handleToggle("add-money-section");
  handleActive("add-btn");
});

document.getElementById("cashout-btn").addEventListener("click", function () {
  handleToggle("cash-out-section");
  handleActive("cashout-btn");
});

document.getElementById("transfer-btn").addEventListener("click", function () {
  handleToggle("transfer-money-section");
  handleActive("transfer-btn");
});

document.getElementById("bonus-btn").addEventListener("click", function () {
  handleToggle("get-bonus-section");
  handleActive("bonus-btn");
});
