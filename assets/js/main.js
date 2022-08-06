const elementos = [
    { tag: 'p', texto: '<h2>Frase 1<h2>' },
    { tag: 'div', texto: '<h3>Frase 2<h3>' },
    { tag: 'section', texto: '<h4>Frase 3<h4>' },
    { tag: 'footer', texto: '<h5>Frase 4<h5>' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);