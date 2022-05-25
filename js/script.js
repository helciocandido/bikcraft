//ativar link menu
const links = document.querySelectorAll(".header-menu a");

links.forEach((link) => {
  if (location.href.includes(link.href)) {
    link.classList.add("ativo");
  }
});

//enviar informações para orçamento

const parametros = new URLSearchParams(location.search);

parametros.forEach((parametro) => {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
});

//Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", (event) => {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);
    const respostaAtiva = document.querySelector(".perguntas .ativa");
    resposta.classList.toggle("ativa");
    if (respostaAtiva) {
      respostaAtiva.classList.remove("ativa");
    }
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativa);
  });
});

//Galeria de imagens
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

galeria.forEach((img) => {
  img.addEventListener("click", (event) => {
    if (matchMedia("(min-width: 1000px)").matches) {
      galeriaContainer.prepend(event.currentTarget);
    }
  });
});

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
