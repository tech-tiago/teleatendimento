function includeHTML(file, targetId) {
    fetch('./../../tipificacoes/' + file) // Caminho relativo para a pasta 'tipificações'
        .then(response => response.text())
        .then(html => {
            document.getElementById(targetId).innerHTML = html;
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo HTML:', error);
        });
}

// Exemplo de uso:
includeHTML('/tipificacoes.html', 'tipificacoes');
includeHTML('/abandono-incapaz.html', 'abandonoIncapaz');
includeHTML('/acidentes-com-vitimas.html', 'acidentesComVitimas');
includeHTML('/acidentes-sem-vitimas.html', 'acidentesSemVitimas');
includeHTML('/afogamento.html', 'afogamento');
includeHTML('/agradecimento.html', 'agradecimento');


