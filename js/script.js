// let lastScrollTop = 0;
// const navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', () => {
// 	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

// 	if (scrollTop > lastScrollTop) {
// 		navbar.style.top = '-80px';
// 	} 
// 	else {
// 		navbar.style.top = '0';
// 	}

// 	lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
// });
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


(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()