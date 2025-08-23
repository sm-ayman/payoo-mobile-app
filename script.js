// login button functionality
document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const phoneNumber = 123456789;
  const pinNumber = 1234;

  const phoneNumberValue = parseInt(
    document.getElementById("phone-number").value
  );
  const pinNumberValue = parseInt(document.getElementById("pin-number").value);

  if (phoneNumber === phoneNumberValue && pinNumber === pinNumberValue) {
    // console.log("matched");
    window.location.href = "./home.html";
  } else alert("Wrong credentials!");
});
