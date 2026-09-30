document.addEventListener("DOMContentLoaded", function () {

    const imagens = [
        "/img/foto1.jpg",
        "/img/foto2.jpg",
        "/img/foto3.jpg",
    ];

    let imagemAtual = 0;

    const imagem = document.getElementById("imagemBanner");
    const anterior = document.getElementById("anterior");
    const proximo = document.getElementById("proximo");

    console.log("JavaScript carregado!");
    console.log("Imagem:", imagem);
    console.log("Botão anterior:", anterior);
    console.log("Botão próximo:", proximo);

    proximo.onclick = function () {

        console.log("Clicou no botão próximo!");

        imagemAtual++;

        if (imagemAtual >= imagens.length) {
            imagemAtual = 0;
        }

        imagem.src = imagens[imagemAtual];

    };

    anterior.onclick = function () {

        console.log("Clicou no botão anterior!");

        imagemAtual--;

        if (imagemAtual < 0) {
            imagemAtual = imagens.length - 1;
        }

        imagem.src = imagens[imagemAtual];

    };

});