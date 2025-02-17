//script para fazer rolagem suave em todos os href
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }
  });
});

//botao para redirecionar whatsapp
function botaoWpp() {
  //numero da empresa
  const numero = "5511947244958";
  //mensagem que vai ficar qnd o cliente for redirecionado pro wpp
  const mensagem = encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento."
  );
  //url do link do wpp com o numero e mensagem
  const url = `https://wa.me/${numero}?text=${mensagem}`

  //abre a pagina do wpp em uma nova aba
  window.open(url, "_blank");
}

function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "assets/imgs/menu_white_36dp.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "assets/imgs/close_white_36dp.svg";
  }
}