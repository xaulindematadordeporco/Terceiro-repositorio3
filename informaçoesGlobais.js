const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function visualizarInformacoesGlobais() {

    const res = await fetch(url);
    const dados = res.json();
    console.log(dados);
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-conteiner__texto')
    paragrafo.innerHTML = 'voce sabia que o mundo tem &{dados.
    total_pessoas_mundo} e que aproximamente &{dados.
    total_pessoas_conectadas} estao conectadas em alguma rede social e passam
    em media &(dados.tempo_medio) horas conectadas.';

}

visualizarInformacoesGlobais();