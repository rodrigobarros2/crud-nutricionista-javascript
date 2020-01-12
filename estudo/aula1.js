console.log("Fui carregado de um arquivo externoo");


document.querySelector("h2");
//para selecionar / manipular algum seletor (html) é utilizado a função querySelector, só é capaz de selecionar um elemto com o msm nome para selecionar todos os h2 teria que usar o querySelectorAll

document.textContent("h2")
//para selecionar / manupular algum texto no html é utilizado textContent

//EXEMPLO


var titulo = document.querySelector("h2");
titulo.textContent = "Novo Titulo";

//seleciona a tag h2 do html e coloca como conteudo dela um texto "Novo Titulo"


//OBS: Nunca buscar um querySelector por tag e sim por .class ex: .titulo