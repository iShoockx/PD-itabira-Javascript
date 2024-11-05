(() => {
    const inputnome = document.getElementById('nome-dev')
    const botaoguarda = document.getElementById('guarda')

    async function carregadevsporuser (user){
        const devdata = await fetch(`https://api.github.com/users/${user}`)
        const listadevs = await devdata.json()
        return listadevs
    }
    
    function mostralista(dev){
        for (const [key, value] of Object.entries(dev)) {
            const blocodev = document.createElement('p')
            blocodev.innerText = `${key}: ${value}`
            document.body.appendChild(blocodev)
        }
    }

    inputnome.addEventListener('keyup', (e) => {
        localStorage.setItem('devProcurado',e.target.value)
    })
    
    botaoguarda.addEventListener('click', async () => {
        const devProcurado = localStorage.getItem('devProcurado');
        
        // Carrega os dados do usuário
        const dadosdev = await carregadevsporuser(devProcurado);
        
        // Salva os dados do usuário no localStorage como JSON
        localStorage.setItem('devProcuradoDados', JSON.stringify(dadosdev));
        dadosmostrados = JSON.parse(localStorage.getItem('devProcuradoDados'))
        
        // Exibe os dados do usuário na página
        mostralista(dadosmostrados);
    });
})()

