import {getCSS} from "common.js"

async function quantidadedeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/mais/numero-usuarios.json';
    const res = await fetch(url)
    const dados = await res.json();
    const nomeDasRedes = Object.keys(dados);
    const quantidadedeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadedeUsuarios,
            type: 'bar'
            color: getCSS('--primary-color')
        }
    ]

    const layout = {
        plot_bgcolor: getCSS ('--bg-color'),
        paper_bgcolor: getCSS ('--bg-color')
    }

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico,data)
}

quantidadedeUsuarios();