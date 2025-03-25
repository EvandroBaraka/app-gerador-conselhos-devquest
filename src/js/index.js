async function solicitarConselho() {
    const url = 'https://api.adviceslip.com/advice'
    const resposta = await fetch(url)
    const conselho = await resposta.json()
    return conselho
}

async function mudarConselho() {
    try {
        const conselhoGerado = await solicitarConselho()
        try {
            idConselho.innerText = `Advice #${conselhoGerado.slip.id}`
            conselho.innerText = conselhoGerado.slip.advice
        } catch (error) {
            console.log(`Erro ao atribuir textos: ${error}`)
        }
    } catch (error) {
        console.log(`Erro ao consultar API: ${error}`)
    }
}


const idConselho = document.getElementById('id-conselho')
const conselho = document.getElementById('conselho')
const botaoGerarConselho = document.getElementById('botao')

mudarConselho()
botaoGerarConselho.addEventListener('click', () => mudarConselho())