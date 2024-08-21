// Botão que só colapsa o "dentro"
document.getElementById("CollapseTI").addEventListener("click", function() {
    const dentro = document.getElementById("dentroTI");
    if (dentro.style.display === "block") {
        dentro.style.display = "none"; // Esconde o conteúdo
        document.getElementById("toggleImageTI").src = "css/media/descer.png"; // Muda a imagem para "descer"
    }
});