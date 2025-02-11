//usar rolagem suave para a parte 'sobre' da empresa
function sobreEmpresa() {
  document.getElementById("#").scrollIntoView({ behavior: "smooth" });
}

//botao para redirecionar whatsapp
function botaoWpp() {
  //numero da empresa
  const numero = "";
  //mensagem que vai ficar qnd o cliente for redirecionado pro wpp
  const mensagem = encodeURIComponent(
    "Olá! Gostaria de mais informações sobre a fabrica."
  );
  //url do link do wpp com o numero e mensagem
  const url = "";

  //abre a pagina do wpp em uma nova aba
  window.open(url, "_blank");
}
