let lista_curtidas = []
let input = document.getElementById('texto')
const botao = document.getElementById('botao')


botao.addEventListener('click', () => {
    
    const paragrafo = document.getElementById('paragrafo')
    lista_curtidas.push(input.value.trim().split(','))
    if (lista_curtidas.length === 1){
        paragrafo.innerText = lista_curtidas + " Curtiu"
        input.value = '';
    }
    else if (lista_curtidas.length === 2) {
        paragrafo.innerText = `${lista_curtidas[0]} e ${lista_curtidas[1]} curtiram`
        input.value = '';
    }
    else{
        paragrafo.innerText = `${lista_curtidas[0]} , ${lista_curtidas[1]} e mais ${lista_curtidas.length - 2} pessoas curtiram`
        input.value = '';
    }
})

