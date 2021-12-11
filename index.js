// sidebar menu
(() => {
    const menuBtnRef = document.querySelector('[data-sidebar-menu]');
    const mobileMenuRef = document.querySelector('[data-menu]');
    const backdropRef = document.querySelector('.backdrop');

      menuBtnRef.addEventListener('click', () => {  
      menuBtnRef.classList.toggle('is-open');
      mobileMenuRef.classList.toggle('is-open');
    });
  })();