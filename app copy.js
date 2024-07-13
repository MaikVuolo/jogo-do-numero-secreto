let numeroNaLista =[];
let limiteNumeros = 5;
let numeroSecreto = numeroAleatorio();
let numeroDeTentativas = 1;

function exibirNumeroNaTela(tag, texto){
    let exibirNumeroNaTela = document.querySelector(tag);
    exibirNumeroNaTela.innerHTML = texto;
}
function mensagemInicial(){
    exibirNumeroNaTela("h1","Jogo do número secreto");
    exibirNumeroNaTela("p","escolha um número de 1 a 10" );
}
mensagemInicial()

function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log (chute == numeroAleatorio);
    if (chute == numeroSecreto){
        exibirNumeroNaTela("h1", "Acertou");
        let palavra = numeroDeTentativas > 1? "tentativas" : "tentativa";
        let mensagemTentativa = `você acertou o numero secreto com ${numeroDeTentativas} ${palavra}`;
        exibirNumeroNaTela("p",mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(chute > numeroSecreto){
            exibirNumeroNaTela("p", `o numero secreto é menor que ${chute}`);
        }else {
            exibirNumeroNaTela("p", `o numero secreto é maior que ${chute}`);
        }
    }limparCampo();
    numeroDeTentativas++
    
       }
function reiniciarJogo(){
    numeroDeTentativas = 1;
    mensagemInicial()
    limparCampo()
    numeroSecreto = numeroAleatorio()
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = ""
       }

function numeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random ()* limiteNumeros +1 );
  let quantidadeDeElementos = numeroNaLista.length;

    if(limiteNumeros == quantidadeDeElementos){
        numeroNaLista = [];
    }

    if(numeroNaLista.includes(numeroEscolhido)){
    return numeroAleatorio ();
    }else{
        numeroNaLista.push(numeroEscolhido);
        console.log(numeroNaLista);
        return numeroEscolhido;
    }
}
