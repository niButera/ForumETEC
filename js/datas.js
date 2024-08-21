function toggleInfo(buttonId) {
    const info = document.querySelector(`#${buttonId} .info`);
    const buttonText = document.querySelector(`#${buttonId} #buttonText`);

    if (info.classList.contains('show')) {
        info.classList.remove('show');
        buttonText.textContent = "Tanana-Feira (XX/XX)";
    } else {
        info.classList.add('show');
        buttonText.textContent = "Nome do Curso (XX/XX)";
    }
}

