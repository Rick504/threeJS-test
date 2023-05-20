// Função para aumentar o valor com a rolagem da bolinha do mouse
function increaseValueWithScroll(event) {
    // Verifica a direção da rolagem do mouse
    const delta = Math.sign(event.deltaY); // -1 para rolagem para cima, 1 para rolagem para baixo

    // Ajusta a quantidade de incremento/diminuição do valor conforme necessário
    const incremento = 1;

    // Atualiza o valor com base na direção da rolagem
    if (delta === -1) {
        valor += incremento;
    } else if (delta === 1) {
        valor -= incremento;
    }
}

// Exemplo de uso:
let valor = 0;

// Adiciona o evento de rolagem do mouse ao elemento desejado (por exemplo, o documento)
document.addEventListener('wheel', increaseValueWithScroll);

// Função para ajustar o zoom da câmera com base na rolagem do mouse
function ajustarZoomComScroll(event) {
    // Verifica a direção da rolagem do mouse
    const delta = Math.sign(event.deltaY); // -1 para rolagem para cima, 1 para rolagem para baixo

    // Ajusta o fator de zoom conforme necessário
    const zoomFactor = 0.3;

    // Atualiza o valor do zoom da câmera
    zoomCam -= delta * zoomFactor;

    // Limita o zoom dentro do intervalo desejado
    zoomCam = Math.max(0.5, zoomCam); // Zoom mínimo
    zoomCam = Math.min(1.5, zoomCam); // Zoom máximo

    // Atualiza a câmera
    camera.zoom = zoomCam;
    camera.updateProjectionMatrix();
}

// Adiciona o evento de rolagem do mouse à janela
window.addEventListener('wheel', ajustarZoomComScroll, false);
