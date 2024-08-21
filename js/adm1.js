// Botão que alterna entre expandir e colapsar
document.getElementById("toggleImage").addEventListener("click", function() {
    const dentro = document.getElementById("dentro");
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
document.getElementById("onlyCollapseButton").addEventListener("click", function() {
    const dentro = document.getElementById("dentro");
    if (dentro.style.display === "block") {
        dentro.style.display = "none"; 
        document.getElementById("toggleImage").src = "css/media/descer.png"; 
    }
});

