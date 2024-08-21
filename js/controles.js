// Obter elementos
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const close = document.getElementsByClassName("close")[0];
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const images = document.querySelectorAll("#secundarias .scnd");
let currentIndex = 0;

// Função para abrir o modal
images.forEach((image, index) => {
    image.addEventListener("click", function () {
        modal.style.display = "block";
        modalImage.src = this.src;
        captionText.innerHTML = this.alt;
        currentIndex = index;
    });
});

// Função para fechar o modal
close.onclick = function () {
    modal.style.display = "none";
}

// Função para mostrar a próxima imagem
next.onclick = function () {
    currentIndex = (currentIndex + 1) % images.length;
    modalImage.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
}

// Função para mostrar a imagem anterior
prev.onclick = function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
}

// Fechar o modal ao clicar fora da imagem
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
