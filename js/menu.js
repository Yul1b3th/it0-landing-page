((d) => {
  const $btnMenu = d.querySelector('.menu-btn'),
    $menu = d.querySelector('.menu'),
    $body = d.body;

  const toggleMenu = () => {
    $btnMenu.firstElementChild.classList.toggle('none');
    $btnMenu.lastElementChild.classList.toggle('none');
    $menu.classList.toggle('is-active');

    // Añadir o eliminar la clase 'overflow-hidden' del body
    $body.classList.toggle('overflow-hidden');
  };

  $btnMenu.addEventListener('click', toggleMenu);

  // Función para cerrar el menú cuando se hace clic en un enlace
  const closeMenu = () => {
    $btnMenu.firstElementChild.classList.remove('none');
    $btnMenu.lastElementChild.classList.add('none');
    $menu.classList.remove('is-active');

    // Eliminar la clase 'overflow-hidden' del body cuando se hace clic en un enlace del menú
    $body.classList.remove('overflow-hidden');
  };

  d.addEventListener('click', (e) => {
    if (!e.target.matches('.menu a')) return false;
    closeMenu();
  });

  // Cerrar el menú cuando se cambia el tamaño de la ventana
  window.addEventListener('resize', () => {
    // Verificar si el menú está abierto y cerrarlo
    if ($menu.classList.contains('is-active')) {
      closeMenu();
    }
  });
})(document);
