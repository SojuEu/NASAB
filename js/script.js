// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

const senha = document.getElementById("senha");
const confirmaSenha = document.getElementById("confirmaSenha");

function validarSenha() {
  if (confirmaSenha.value !== senha.value) {
    confirmaSenha.setCustomValidity("As senhas não coincidem");
  } else {
    confirmaSenha.setCustomValidity("");
  }
}

senha.addEventListener("input", validarSenha);
confirmaSenha.addEventListener("input", validarSenha);

senha.addEventListener("input", validarSenha);
confirmaSenha.addEventListener("input", validarSenha);
document.getElementById('cpf').addEventListener('input', function (e) {
  var value = e.target.value;
  var cpfPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
    .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
    .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
    .replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
    .replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
  e.target.value = cpfPattern;
});
function validaCPF(cpf) {
  cpf = cpf.replace(/\D+/g, '');
  if (cpf.length !== 11) return false;

  let soma = 0;
  let resto;
  if (/^(\d)\1{10}$/.test(cpf)) return false; // Verifica sequências iguais

  for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if ((resto === 10) || (resto === 11)) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if ((resto === 10) || (resto === 11)) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11))) return false;

  return true;
}

document.getElementById('cpfForm').addEventListener('submit', function (e) {
  var cpf = document.getElementById('cpf').value;
  if (!validaCPF(cpf)) {
    e.preventDefault(); // Impede o envio do formulário
    alert('CPF inválido. Verifique o número digitado.');
    document.getElementById('cpf').focus(); // Foca no campo de CPF após o erro
  }
});

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-80px';
  }
  else {
    navbar.style.top = '0';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// const scrollSpeed = 100;
//   let isScrolling = false;
//   let targetScroll = 0;

//   window.addEventListener("wheel", (event) => {
//     event.preventDefault();

//     const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

//     targetScroll += event.deltaY > 0 ? scrollSpeed : -scrollSpeed;

//     targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));

//     if (!isScrolling) smoothScroll();
//   }, { passive: false });

//   function smoothScroll() {
//     isScrolling = true;

//     let currentScroll = window.scrollY;
//     let distance = targetScroll - currentScroll;

//     if (Math.abs(distance) > 1) {
//       window.scrollTo(0, currentScroll + distance * 0.15);
//       requestAnimationFrame(smoothScroll);
//     } else {
//       window.scrollTo(0, targetScroll);
//       isScrolling = false;
//     }
//   }

//HORÁRIO E DATA
function atualizarDataHora() {
  const agora = new Date();

  const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  const formato = new Intl.DateTimeFormat('pt-BR', opcoes);
  let dataHora = formato.format(agora);

  // deixa a primeira letra maiúscula
  dataHora = dataHora.charAt(0).toUpperCase() + dataHora.slice(1);

  document.getElementById("data-hora").innerHTML = dataHora;
}

setInterval(atualizarDataHora, 1000);
atualizarDataHora();

