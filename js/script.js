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
const scrollSpeed = 100;
  let isScrolling = false;
  let targetScroll = 0;

  window.addEventListener("wheel", (event) => {
    event.preventDefault();

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    targetScroll += event.deltaY > 0 ? scrollSpeed : -scrollSpeed;

    targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));

    if (!isScrolling) smoothScroll();
  }, { passive: false });

  function smoothScroll() {
    isScrolling = true;

    let currentScroll = window.scrollY;
    let distance = targetScroll - currentScroll;

    if (Math.abs(distance) > 1) {
      window.scrollTo(0, currentScroll + distance * 0.15);
      requestAnimationFrame(smoothScroll);
    } else {
      window.scrollTo(0, targetScroll);
      isScrolling = false;
    }
  }
(() => {
      'use strict';
      const forms = document.querySelectorAll('.needs-validation');
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    })();