
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numerosecreto = gerarNumeroAleatorio ();

// função com parâmetro
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

// função que não tem parâmetro e não tem retorno 
function verificarChute() {
    console.log (numerosecreto);
    
}

// função com retorno

function gerarNumeroAleatorio() {
    return parseInt(Math.random () * 10 + 1);
   

}
