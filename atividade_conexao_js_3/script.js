// Método Simples: Usando InnerHTML
document.getElementById('titulo').innerHTML = 'Título do Site';

const produtoSimples = {
    nome: 'Produto Simples',
    descricao: 'Este é um produto simples para venda.',
    preco: 19.99
};

document.getElementById('produto').innerHTML = `
    <h2>${produtoSimples.nome}</h2>
    <p>${produtoSimples.descricao}</p>
    <p>Preço: R$ ${produtoSimples.preco.toFixed(2)}</p>
`;

// Método Complexo: Criando elementos e adicionando como filhos
const produtoComplexo = {
    nome: 'Produto Complexo',
    descricao: 'Este é um produto mais complexo com uma imagem.',
    preco: 29.99,
    imagemSrc: 'produto.jpg'
};

const produtoContainer = document.createElement('div');
const produtoTitulo = document.createElement('h2');
produtoTitulo.textContent = produtoComplexo.nome;
const produtoDescricao = document.createElement('p');
produtoDescricao.textContent = produtoComplexo.descricao;
const produtoPreco = document.createElement('p');
produtoPreco.textContent = `Preço: R$ ${produtoComplexo.preco.toFixed(2)}`;
const produtoImagem = document.createElement('img');
produtoImagem.src = produtoComplexo.imagemSrc;
produtoImagem.alt = produtoComplexo.nome;

produtoContainer.appendChild(produtoTitulo);
produtoContainer.appendChild(produtoDescricao);
produtoContainer.appendChild(produtoPreco);
produtoContainer.appendChild(produtoImagem);

document.body.appendChild(produtoContainer);
