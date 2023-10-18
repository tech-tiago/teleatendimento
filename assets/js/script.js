// Selecione todos os botões de cópia
const copyButtons = document.querySelectorAll('.copy-text button');

// Adicione um ouvinte de evento a cada botão
copyButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Encontre o elemento de entrada de texto associado a este botão
        const input = button.parentElement.querySelector('input.text');

        // Selecione o texto na entrada de texto
        input.select();

        // Copie o texto para a área de transferência
        document.execCommand('copy');

        // Adicione a classe 'active' ao contêiner .copy-text
        button.parentElement.classList.add('active');

        // Remova a seleção
        window.getSelection().removeAllRanges();

        // Remova a classe 'active' após 2500 milissegundos (2,5 segundos)
        setTimeout(() => {
            button.parentElement.classList.remove('active');
        }, 2500);
    });
});

