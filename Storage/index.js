
// let input = document.getElementById('texto')
// const botao = document.getElementById('botao')
// const paragrafo = document.getElementById('paragrafo')



// botao.addEventListener('click', () => {
//     paragrafo.innerText = input.value.trim().split(',')
//     const nomesalvo = JSON.stringify(paragrafo.innerText)
//     localStorage.setItem('dadosusuario',nomesalvo)
// })
// addEventListener('load',() => {
//     const meunome = JSON.parse(localStorage.getItem('dadosusuario'))
//     if(meunome){
//         paragrafo.innerText = meunome
//     }
//     else{
//         paragrafo.innerText = "Desculpa nao me lembro de voce"
//     }
// })
const frutas = ['maça','laranja','melancia']
for(let fruta =0 ; fruta < frutas.length;fruta++){
    localStorage.setItem(`Fruta ${parseInt(fruta)}`,frutas[fruta])
}