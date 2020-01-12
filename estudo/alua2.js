//aqui alteramos o html e fazemos validações de valores

var paciente = document.querySelector ("#primeiro-paciente"); // busca o seletor tr 

var tdPeso = paciente.querySelector (".info-peso"); // pega o seletor td do primeiro-paciente
var peso = tdPeso.textContent; // pega o conteudo de texto do td 

var tdAltura = paciente.querySelector(".info-altura");// pega o seletor td do primeiro-paciente
var altura = tdAltura.textContent; // pega o conteudo de texto do td

var tdImc = paciente.querySelector(".info-imc")

var pesoEhValido = true;
var alturaEhValido = true;

if (peso < 0 || peso >= 1000) {
    console.log("Peso inválido");
    pesoEhValido = false;
}

if (altura < 0 || altura >= 3.00) {
    console.log("Altura Inválida");
    alturaEhValido = false
}

if ( alturaEhValido && pesoEhValido){
    var imc = peso / (altura * altura); //colocar entre parênteses pra n dar errado o calc
    tdImc.textContent = imc; 
    console.log("Texto Válido");
    
}



