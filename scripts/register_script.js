const checkbox = document.getElementById("checkbox");
const phoneInput = document.getElementById("phone");


checkbox.addEventListener("click", function () {
  var active
  const cipInput = document.getElementById('cipInput');
  const paymentsText = document.getElementsByClassName('warning');
  console.log(checkbox.checked)

  if(checkbox.checked)
  {
    active = false
  }
  else{
    active = true
  }
  cipInput.disabled = active
});

form.addEventListener("submit", function (event) {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("As senhas não coincidem!");
    event.preventDefault();
  }
});


phoneInput.addEventListener("input", function (e) {

  let input = e.target.value.replace(/\D/g, "");

  if (input.length > 2) {
    input = `(${input.slice(0, 2)}) ` + input.slice(2);
  }
  if (input.length > 9) {
    input = `${input.slice(0, 9)}-${input.slice(9, 13)}`;
  }
  if (input.length > 14) {
    input = input.slice(0, 14);
  }

  e.target.value = input;
});

console.log(checkbox.checked)