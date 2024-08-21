// Botão que só colapsa o "dentro"
document.getElementById("CollapseEDF").addEventListener("click", function() {
    const dentro = document.getElementById("dentroEDF");
    if (dentro.style.display === "block") {
        dentro.style.display = "none"; // Esconde o conteúdo
        document.getElementById("toggleImageEDF").src = "css/media/descer.png"; // Muda a imagem para "descer"
    }
});