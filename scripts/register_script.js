const checkbox = document.getElementById('checkbox');
  const cipField = document.getElementById('cip');
  const cipInput = document.getElementById('cip'); // Adicionado para manipular o required

  checkbox.addEventListener('change', function() {
    cipField.style.display = this.checked ? 'flex' : 'none';
    cipInput.required = this.checked;  // Define o campo como obrigatório se o checkbox estiver marcado
  });

  // Javascript para validação de senha (exemplo simples)
    const form = document.getElementById('form');
    form.addEventListener('submit', function(event) {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            event.preventDefault(); // Impede o envio do formulário
        }
    });
