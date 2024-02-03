const verdeCipreste = {
    nome: "Verde-Cipreste",
    pasta : "imagens-verde-cipreste"
}
const azulInverno = {
    nome: "Azul-Inverno",
    pasta : "imagens-azul-inverno"
}
const meiaNoite = {
    nome: "Meia-Noite",
    pasta : "imagens-meia-noite"
}
const estelar = {
    nome: "Estelar",
    pasta : "imagens-estelar"
}
const rosaClaro = {
    nome: "Rosa-Claro",
    pasta : "imagens-rosa-claro"
}
const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];

// Funcao para trocar a imagem na pagina
let imagemSelecionada = 1;
const imagemVisualizacao = document.getElementById("imagem-visualizacao");

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector("[name='opcao-imagem']:checked").id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-" + imagemSelecionada + ".jpeg";
}

// Trocar o tamanho da imagem 
const opcoesTamanho = ["41 mm", "45 mm"];
let tamanhoSelecionado = 1;
const tituloProduto = document.getElementById("titulo-produto");

function trocarTamanho() {
    const idOpcaoSelecionada = document.querySelector("[name='opcao-tamanho']:checked").id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    //Mudar o nome do produto
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    //Mudar o tamanho da imagem do produto
    if(opcoesTamanho[tamanhoSelecionado] === "41 mm"){
        imagemVisualizacao.classList.add("caixa-pequena");
    } else {
        imagemVisualizacao.classList.remove("caixa-pequena");
    }
}

const nomeCor = document.getElementById("nome-cor-selecionada");
const miniaturaImagem0 = document.getElementById("0-imagem-miniatura");
const miniaturaImagem1 = document.getElementById("1-imagem-miniatura");
const miniaturaImagem2 = document.getElementById("2-imagem-miniatura");

// Funcao para trocar a cor do relogio 
function trocarCor() {
    const idOpcaoSelecionada = document.querySelector("[name = 'opcao-cor']:checked").id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    // Mudando o nome das cores e o tamnho do relogio 
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    // Mudando o nome das cores
    nomeCor.innerText = "Cor: " + opcoesCores[corSelecionada].nome;
    // Trocar as imagens das miniaturas 
    miniaturaImagem0.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-0.jpeg"; 
    miniaturaImagem1.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-1.jpeg"; 
    miniaturaImagem2.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-2.jpeg"; 
    //Trocar a imagem de visualização 
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-" + imagemSelecionada + ".jpeg";
}