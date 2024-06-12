let listaDeNumerosSorteados = [];
let nuemeroLimite = 10;
let numeroSecreto = gerarNumeroaleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial( ){
    exibirTextoNaTela('h1', 'jogo secreto dos guri');
exibirTextoNaTela('p', 'escolha um número entre 1 ao 10');
}

exibirMensagemInicial();

function verificarChute() {
   let chute = document.querySelector('input').value;
    
   if (chute == numeroSecreto){
 exibirTextoNaTela('h1', 'Acertou cpx');
   let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
 let mensagenmTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
 exibirTextoNaTela('p', mensagenmTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto) {
 exibirTextoNaTela('p', 'o número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é Maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroaleatorio() {
   let numeroEscolhido = parseInt(Math.random() * nuemeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == nuemeroLimite) {
    listaDeNumerosSorteados = [];
   }
   if ( listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroaleatorio();
        }else{
            listaDeNumerosSorteados.push(numeroEscolhido);
            console.log(listaDeNumerosSorteados)
            return numeroEscolhido;
        }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
numeroSecreto = gerarNumeroaleatorio();
limparCampo();
tentativas = 1;
exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled',true); 

}