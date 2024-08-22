// Seleção de elementos
const elements = {
  btnMenu: document.getElementById('btn-menu'),
  menu: document.getElementById('menu-mobile'),
  overlay: document.getElementById('overlay-menu'),
  btnFechar: document.querySelector('.menu-mobile .btn-fechar'),
  navLinks: document.querySelectorAll('.menu-desktop ul li a, .menu-mobile ul li a')
};

// Funções para abrir e fechar menu
function openMenu() {
  elements.menu.classList.add('abrir-menu');
}

function closeMenu() {
  elements.menu.classList.remove('abrir-menu');
}

// Eventos de clique
elements.btnMenu.addEventListener('click', openMenu);
elements.btnFechar.addEventListener('click', closeMenu);
elements.overlay.addEventListener('click', closeMenu);

// Fechar menu com tecla Esc
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

// Rolagem suave e fechamento do menu ao clicar em um link
elements.navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  });
});
