const botao = document.getElementById("botao-tema");

botao.addEventListener("click", function () {
  document.body.classList.toggle("escuro");

  if (document.body.classList.contains("escuro")) {
    botao.textContent = "Tema claro";
  } else {
    botao.textContent = "Tema escuro";
  }
});