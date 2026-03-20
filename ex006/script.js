const usuario = document.querySelector("#iusuario");
const senha = document.querySelector("#isenha");
const botao = document.querySelector("#ibotao");

usuario.addEventListener("focus", () => {
    usuario.classList.add("usuario");
})