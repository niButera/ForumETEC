// Botão que alterna entre expandir e colapsar
document.getElementById("toggleImageEDF").addEventListener("click", function() {
    const dentro = document.getElementById("dentroEDF");
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
document.getElementById("CollapseEDF").addEventListener("click", function() {
    const dentro = document.getElementById("dentroEDF");
    if (dentro.style.display === "block") {
        dentro.style.display = "none"; 
        document.getElementById("toggleImageEDF").src = "css/media/descer.png"; 
    }
});