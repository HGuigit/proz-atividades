// Capturando os elementos pelo ID
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.getElementById('link');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo aos elementos
titulo.innerText = 'Título da Página';
link.innerText = 'Clique aqui para acessar o site';
listaNaoOrdenada.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>';

// Adicionando itens com links na lista ordenada
const sites = ['https://www.google.com', 'https://www.facebook.com', 'https://www.twitter.com'];
sites.forEach(site => {
    const listItem = document.createElement('li');
    const siteLink = document.createElement('a');
    siteLink.href = site;
    siteLink.innerText = site;
    listItem.appendChild(siteLink);
    listaOrdenada.appendChild(listItem);
});
