// Botão que alterna entre expandir e colapsar
document.getElementById("toggleImageTRSM").addEventListener("click", function() {
    const dentro = document.getElementById("dentroTRSM");
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
document.getElementById("CollapseTRSM").addEventListener("click", function() {
    const dentro = document.getElementById("dentroTRSM");
    if (dentro.style.display === "block") {
        dentro.style.display = "none"; 
        document.getElementById("toggleImageTRSM").src = "css/media/descer.png"; 
    }
});

