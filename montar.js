var film = document.getElementById("listaFilmes");
var lista = [
  "https://criticalhits.com.br/wp-content/uploads/2020/01/dragon-ball-z-filme-dead-zone-01.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/1/1b/Schoolrockposter.jpg",
  "https://s3-sa-east-1.amazonaws.com/catalogodasartes/obra_12469309.jpg",
];

//joga os filmes da lista na tela
function layout(lista) {
  var total = lista.length;

  for (var i = 0; i < total; i++) {
    document.write(
      "<img style='margin: 10px; max-height: 230px;' src=" + lista[i] + ">"
    );
  }
}

layout(lista);

//adiciona um novo filme na lista
function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    console.error("Endereço de filme inválido");
  }
  document.getElementById("filme").value = "";
}

//adiciona o novo filme da lista na tela
function listarFilmesNaTela(filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

//remove qualquer filme da tela
film.addEventListener("dblclick", function (event) {
  event.target.classList.add("fadeOut");

  setTimeout(function () {
    event.target.remove();
  }, 500);
});
