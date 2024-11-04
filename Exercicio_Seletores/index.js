const mudatitulo = (novotitulo) => {
    const titulo = document.getElementById('titulo-principal')
    titulo.innerText = novotitulo
}

mudatitulo('Alteraçao de titulo')

const listadecores = ['#d60000', '#05f7ab','#f9d335']

const listadeli = document.getElementsByTagName('li')

for (let i = 0; i < listadeli.length; i++) {
  listadeli[i].style.color = listadecores[i];
}

const listadeparagrafos = document.getElementsByTagName('p')

for(let paragrafo of listadeparagrafos) {
  paragrafo.classList = 'paragrafo'
}

const botao = document.getElementsByTagName('button')
for(let b of botao) {
  b.innerText = 'OFF'
}