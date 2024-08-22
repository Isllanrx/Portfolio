// Armazena o estado do menu (aberto ou fechado)
let isMenuOpen = false;

// Seleciona os elementos apenas uma vez
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');
const btnFechar = menu.querySelector('.btn-fechar');

// Função para abrir o menu
function openMenu() {
  menu.classList.add('abrir-menu');
  isMenuOpen = true;
}

// Função para fechar o menu
function closeMenu() {
  menu.classList.remove('abrir-menu');
  isMenuOpen = false;
}

// Adiciona os event listeners apenas uma vez
btnMenu.addEventListener('click', openMenu);
btnFechar.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Fecha o menu com a tecla Esc
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && isMenuOpen) {
    closeMenu();
  }
});

// Seleciona os links do menu, exceto os da "top bar"
const navLinks = document.querySelectorAll('.menu-mobile ul li a');

// Adiciona o evento de rolagem suave APENAS aos links da "top bar"
document.querySelectorAll('.top-bar-link').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    if (isMenuOpen) {
      closeMenu();
    }

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});