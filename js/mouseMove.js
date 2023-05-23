// Variáveis para armazenar a posição anterior do mouse

// Variáveis para armazenar a posição anterior do mouse
let previousMouseX = 0;
let previousMouseY = 0;
let isLeftButtonPressed = false;

// Função para lidar com o evento de movimento do mouse
function onMouseMove(event) {
    // Verificar se o botão esquerdo está pressionado
    if (isLeftButtonPressed) {
        // Obter a posição atual do mouse
        const currentMouseX = event.clientX;
        const currentMouseY = event.clientY;

        // Calcular a diferença nas coordenadas X e Y
        const deltaX = currentMouseX - previousMouseX;
        const deltaY = currentMouseY - previousMouseY;

        const movePosition = 0.2;

        // Verificar a direção do movimento do mouse
        if (deltaX > 0) {
            // Movimento do mouse para a direita
            camera.position.x -= movePosition;
        } else if (deltaX < 0) {
            // Movimento do mouse para a esquerda
            camera.position.x += movePosition;
        }

        if (deltaY > 0) {
            // Movimento do mouse para baixo
            camera.position.z -= movePosition;
        } else if (deltaY < 0) {
            // Movimento do mouse para cima
            camera.position.z += movePosition;
        }

        // Atualizar a posição anterior do mouse
        previousMouseX = currentMouseX;
        previousMouseY = currentMouseY;
    }
}

// Função para lidar com o evento de pressionar o botão do mouse
function onMouseDown(event) {
    // Verificar se o botão pressionado é o botão esquerdo
    if (event.button === 0) {
        // Botão esquerdo do mouse foi pressionado
        isLeftButtonPressed = true;
    }
}

// Função para lidar com o evento de soltar o botão do mouse
function onMouseUp(event) {
    // Verificar se o botão solto é o botão esquerdo
    if (event.button === 0) {
        // Botão esquerdo do mouse foi solto
        isLeftButtonPressed = false;
    }
}

// Adicionar os listeners de eventos para movimento e clique do mouse
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
