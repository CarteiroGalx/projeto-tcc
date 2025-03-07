const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function (e) {
  // Remove todos os caracteres que não são dígitos
  let input = e.target.value.replace(/\D/g, "");

  // Formata o telefone
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
