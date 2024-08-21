// Botão que só colapsa o "dentro"
document.getElementById("onlyCollapseButton").addEventListener("click", function() {
    const dentro = document.getElementById("dentro");
    if (dentro.style.display === "block") {
        dentro.style.display = "none"; 
        document.getElementById("toggleImage").src = "css/media/descer.png"; 
    }
});


