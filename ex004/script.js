const titulo = document.querySelector("#titulo");
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    console.log("clicou");
    titulo.textContent = "Você clicou";
    titulo.classList.add("ativo");
});