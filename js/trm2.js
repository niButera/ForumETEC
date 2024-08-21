// Botão que só colapsa o "dentro"
document.getElementById("CollapseTRSM").addEventListener("click", function() {
    const dentro = document.getElementById("dentroTRSM");
    if (dentro.style.display === "block") {
        dentro.style.display = "none"; // Esconde o conteúdo
        document.getElementById("toggleImageTRSM").src = "css/media/descer.png"; // Muda a imagem para "descer"
    }
});