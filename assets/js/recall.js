var btns = document.querySelectorAll('#show');

btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var recall = this.nextElementSibling; // Seleciona a div irmã do botão clicado
        if (recall.style.display === 'block') {
            recall.style.display = 'none';
        } else {
            recall.style.display = 'block';
        }
    });
});
