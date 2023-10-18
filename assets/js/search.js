        // Função para atualizar os resultados com base na pesquisa
        function updateResults() {
            const searchInput = document.getElementById('searchInput');
            const query = searchInput.value.toLowerCase();
            const h1Elements = document.querySelectorAll('.bloco h1');

            // Percorre os elementos <h1> e verifica se o texto corresponde à pesquisa
            h1Elements.forEach((h1) => {
                const h1Text = h1.textContent.toLowerCase();
                const bloco = h1.parentElement;
                const shouldShow = h1Text.includes(query);
                bloco.style.display = shouldShow ? 'block' : 'none';
            });
        }

        const searchInput = document.getElementById('searchInput');

        // Adiciona um ouvinte de eventos para chamar a função de atualização quando o texto é digitado
        searchInput.addEventListener('input', updateResults);