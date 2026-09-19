const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');

if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');

    toggle.setAttribute(
      'aria-expanded',
      String(isOpen)
    );
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');

      toggle.setAttribute(
        'aria-expanded',
        'false'
      );
    });
  });
}
