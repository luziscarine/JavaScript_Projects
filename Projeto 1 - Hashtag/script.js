// Trecho do codigo que faz a codificação do botao pause e play!
const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');

let taTocando = 0;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play'); //Desapareço com o icone |>
    botaoPlayPause.classList.add('bi-pause'); //Troco por outro icone ||
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause'); //Desapareço com o icone ||
    botaoPlayPause.classList.add('bi-play'); //Troco por outro icone |>
}

function tocarOuPausar(){
    if (taTocando === 0) {
        tocarFaixa(); 
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

botaoPlayPause.addEventListener('click', tocarOuPausar);


// Trecho do codigo que faz o avanço de faixa 

let capituloAtual = 1;
const numeroCapitulos = 10;

function proximaFaixa(){
    if(capituloAtual === numeroCapitulos)
    {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    } 

    audioCapitulo.src = "./dom-casmurro/" + capituloAtual + ".mp3"; // Capitulo atual = 1, 2, 3, 4, etc...
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

const botaoavanco = document.getElementById('proximo');
botaoavanco.addEventListener('click', proximaFaixa);

// Trecho do codigo que faz o retrocesso de faixa

function voltarFaixa(){
    if(capituloAtual === 1)
    {
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    } 

    audioCapitulo.src = "./dom-casmurro/" + capituloAtual + ".mp3"; // Capitulo atual = 1, 2, 3, 4, etc...
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

const botaoatraso = document.getElementById('anterior');
botaoatraso.addEventListener('click', voltarFaixa);

// Trecho do codigo que atualiza o nome da faixa 

const nomeCapitulo = document.getElementById('capitulo');

function trocarNomeFaixa(){
    nomeCapitulo.innerText = 'Seção ' + capituloAtual;
}



