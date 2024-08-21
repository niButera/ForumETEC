// Botão que alterna entre expandir e colapsar
document.getElementById("toggleImageENF").addEventListener("click", function() {
    const dentro = document.getElementById("dentroENF");
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
document.getElementById("CollapseENF").addEventListener("click", function() {
    const dentro = document.getElementById("dentroENF");
    if (dentro.style.display === "block") {
        dentro.style.display = "none"; 
        document.getElementById("toggleImageENF").src = "css/media/descer.png"; 
    }
});