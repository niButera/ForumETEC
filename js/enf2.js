// Botão que só colapsa o "dentro"
document.getElementById("CollapseENF").addEventListener("click", function() {
    const dentro = document.getElementById("dentroENF");
    if (dentro.style.display === "block") {
        dentro.style.display = "none"; // Esconde o conteúdo
        document.getElementById("toggleImageENF").src = "css/media/descer.png"; // Muda a imagem para "descer"
    }
});