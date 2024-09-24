// Exibindo uma mensagem no console
console.log('Olá mundo!');

// Definindo o estilo do body
document.body.style.backgroundColor = '#E6E6FA'; // Cor de fundo lilás
document.body.style.textAlign = 'center';
document.body.style.fontFamily = 'Arial, sans-serif';

// Criando um novo elemento h1 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Colocando o novo elemento no body
document.body.appendChild(novoElemento);

// Estilizando o novo elemento
novoElemento.style.color = 'purple'; // Mudando a cor do texto para roxo
novoElemento.style.padding = '20px';

// Criando um parágrafo com uma mensagem criativa
let paragrafoCriativo = document.createElement('p');
paragrafoCriativo.innerText = 'A programação é como arte, cada linha é uma pincelada!';
document.body.appendChild(paragrafoCriativo);

// Estilizando o parágrafo
paragrafoCriativo.style.fontSize = '20px';
paragrafoCriativo.style.color = 'white';
paragrafoCriativo.style.fontStyle = 'italic';

// Função para criar corações roxos
function criarCoracao() {
    let coracao = document.createElement('span');
    coracao.innerHTML = '💜'; // Emojis de coração
    coracao.style.fontSize = '20px'; // Tamanho pequeno
    coracao.style.position = 'absolute'; // Para posicionar aleatoriamente
    coracao.style.left = Math.random() * window.innerWidth + 'px'; // Posição aleatória em X
    coracao.style.top = Math.random() * window.innerHeight + 'px'; // Posição aleatória em Y
    document.body.appendChild(coracao);
}

// Criar 200 corações roxos
for (let i = 0; i < 200; i++) {
    criarCoracao();
}
