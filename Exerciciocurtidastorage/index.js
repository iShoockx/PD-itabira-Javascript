let lista_curtidas = JSON.parse(localStorage.getItem('lista')) || [];
console.log(lista_curtidas)
let dados = []
let input = document.getElementById('texto')
const botao = document.getElementById('botao')
const paragrafo = document.getElementById('paragrafo')


function renderizandoparagrafo(){
    if ((lista_curtidas.length === 0)){
        paragrafo.textContent =  "Ninguem Curtiu"
        
    }
    else if (lista_curtidas.length === 1){
        paragrafo.textContent = lista_curtidas + " Curtiu"
        
    }
    else if (lista_curtidas.length === 2) {
        paragrafo.textContent = `${lista_curtidas[0]} e ${lista_curtidas[1]} curtiram`
        
    }
    else{
        paragrafo.textContent = `${lista_curtidas[0]} , ${lista_curtidas[1]} e mais ${lista_curtidas.length - 2} pessoas curtiram`
        
    }
    input.value = '';
}

botao.addEventListener('click', () => {
    const nome = input.value.trim();
    if (nome && !lista_curtidas.includes(nome)) { // Verifica se o nome não está vazio e não está duplicado
        lista_curtidas.push(nome);
    }
    localStorage.setItem('lista',JSON.stringify(lista_curtidas))
    renderizandoparagrafo(lista_curtidas)
}) 

function limpar(){
    lista_curtidas = []
    localStorage.clear()
    renderizandoparagrafo();
}
document.addEventListener("DOMContentLoaded", renderizandoparagrafo())

