import { getCSS } from "./commons.js"

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados);
    const quantidadeUsuarios = Object.values(dados);

    const data = [
        {
           x: nomeDasRedes,
           y: quantidadeUsuarios,
           type: 'bar',
           color: getCSS('--primary-color')
        }

    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color')
    }
    
    const graficos = document.createElement('div');
    graficos.className = 'grafico';
    document.getElementById('graficos-container').appendChild(graficos);
    plotly.newPlot(graficos, data, layout);
}
    
    quantidadeUsuarios()