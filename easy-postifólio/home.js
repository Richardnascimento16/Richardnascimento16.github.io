document.addEventListener("DOMContentLoaded", function () {
    const sobre = document.querySelector(".sobre");

    function mostrarElemento() {
        const elementoPosicao = sobre.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (elementoPosicao < alturaTela * 0.6) {
            sobre.classList.add("visivel");
        }
    }

    // Verifica ao carregar a página e ao rolar
    window.addEventListener("scroll", mostrarElemento);
    mostrarElemento();
});


document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".sobre1, .sobre2");

    function mostrarElementos() {
        elementos.forEach(elemento => {
            const elementoPosicao = elemento.getBoundingClientRect().top;
            const alturaTela = window.innerHeight;

            if (elementoPosicao < alturaTela * 0.9) {
                elemento.classList.add("visivel");
            }
        });
    }

    // Verifica ao carregar a página e ao rolar
    window.addEventListener("scroll", mostrarElementos);
    mostrarElementos();
});
