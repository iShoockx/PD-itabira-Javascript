// Criar funçao que calcula tempo restante, e recebe Data Futura

const calculartemporestante = (dataFutura) => {
    const agora = new Date().getTime()
    const diferençadedatas = dataFutura - agora;
    const segundosdeumminuto = 60 * 1000;
    const segundosdeumahora = 60 * segundosdeumminuto;
    const segundosdodia = 24 * segundosdeumahora;
    
    const dias = Math.floor(diferençadedatas/segundosdodia)
    const horas = Math.floor((diferençadedatas % segundosdodia) / segundosdeumahora)
    const minutos = Math.floor((diferençadedatas % segundosdeumahora) / segundosdeumminuto)
    const segundos = Math.floor((diferençadedatas % segundosdeumminuto) / 1000)

    return{
        dias,
        horas,
        minutos,
        segundos
    }
}  


    // Função que atualiza o temporizador
const atualizarTemporizador = () => {
    const dataFutura = new Date('2024-12-31T23:59:50').getTime() //Tempo futuro
    const temporestante = calculartemporestante(dataFutura)
    
    document.getElementById('dias').innerText = `Dias ${temporestante.dias}`
    document.getElementById('horas').innerText = `Horas ${temporestante.horas}`
    document.getElementById('minutos').innerText = `Minutos ${temporestante.minutos}`
    document.getElementById('segundos').innerText = `Segundos ${temporestante.segundos}`
    
    

}
const intervalo = setInterval(atualizarTemporizador,1000)

