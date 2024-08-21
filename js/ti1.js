// Botão que alterna entre expandir e colapsar
document.getElementById("toggleImageTI").addEventListener("click", function() {
    const dentro = document.getElementById("dentroTI");
    const isExpanded = dentro.style.display === "block";

    if (isExpanded) {
        dentro.style.display = "none";
        this.src = "css/media/descer.png"; 
    } else {
        dentro.style.display = "block";
        this.src = "css/media/subir.png"; 
    }
});

// Botão que só colapsa o "dentro"
document.getElementById("CollapseTI").addEventListener("click", function() {
    const dentro = document.getElementById("dentroTI");
    if (dentro.style.display === "block") {
        dentro.style.display = "none"; 
        document.getElementById("toggleImageTI").src = "css/media/descer.png"; 
    }
});