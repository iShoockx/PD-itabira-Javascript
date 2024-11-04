// const veririficaelemento = (seletor) => {
//     const elemento=document.querySelector(seletor)
//     return !!elemento
// }    


// const contaelementosporseletor = (seletor) => {
//     if(veririficaelemento(seletor)){
//         const todosparagrafos = document.querySelectorAll('p')
//         console.log(`Existem ${todosparagrafos.length} elementos`)
//     } else {
//         console.log(`Não existem elementos com o seletor ${seletor}`)
//     }
// }

const elemento = document.getElementsByTagName('header')
console.log(elemento)

const elementoporid = document.getElementById('principal')

const verificaseexistetag = (elemento) => document.getElementsByTagName(elemento).length > 0

const verificaseexisteid = (elemento) => !!document.getElementById(elemento)

const verificaseexisteClasse = (elemento) => document.getElementsByClassName(elemento).length > 0

const verificaseexistename = (elemento) => document.getElementsByName(elemento).length > 0

const listadelementos = ['header','ul','Botao','aaa']

const descobretipodoelemento = (lista) => {
    if(listadelementos.length === 0){
        console.log('Voce nao passou uma lista de elementos')
    }   else {
            for(let nome of lista){
                if(verificaseexistetag(nome)){
                    console.log(`${nome} é uma tag`)
                }
                else if(verificaseexisteid(nome)){
                    console.log(`${nome} é um id`)
                }
                else if(verificaseexisteClasse(nome)){
                    console.log(`${nome} é uma classe`)
                }
                else if(verificaseexistename(nome)){
                    console.log(`${nome} é um name`)
                }
                else{
                    console.log(`${nome} Não foi encontrado`)
                }
            }
    }
}
descobretipodoelemento(listadelementos)