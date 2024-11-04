let tarefas = [];

console.log(tarefas)
function adicionartarefa(){
    const descriçao = document.getElementById('descriçao').value.trim().split(',')
    tarefas.push({descriçao: descriçao,status:false})
    descriçao.value = '' // limpar o input
    renderizar()

}

function alternarstatus(indice){
    tarefas[indice].status = !tarefas[indice].status // alterna o status da check box
}

function renderizar(){
    const listaTarefas = document.getElementById('listaTarefas') 
    listaTarefas.innerHTML = '' // Entra no elemento html para fazer modificaçoes 

    tarefas.forEach((tarefa,indice) => {
        const itemtarefa = document.createElement('li') // adiciona elemento li e sua respectiva classe
        itemtarefa.classList.add('item-tarefa')

        if (tarefa.status){
            itemtarefa.classList.add("concluida")
        }
        else{
            itemtarefa.classList.add('nao-concluida')
        }
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = tarefa.status
        checkbox.onclick = () => alternarstatus(indice)

        const label = document.createElement('label')
        label.textContent = tarefa.descriçao

        itemTarefa.appendChild(checkbox);
        itemTarefa.appendChild(label);
        listaTarefas.appendChild(itemTarefa);
    })
}



