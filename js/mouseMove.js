let detailsBuildings = {
    buildingLeftWidth: 3,
    buildingHeigth: 12,
    buildingRigthWidth: 3,
    positionX: -1.5,
    positionZ: 1.7,
};
let cube = createBuildings(detailsBuildings, '../img/grama.png');

let detailsBuildings2 = {
    buildingLeftWidth: 3,
    buildingHeigth: 12,
    buildingRigthWidth: 3,
    positionX: -6.5,
    positionZ: 1.7,
};
let cube2 = createBuildings(detailsBuildings2, '../img/grama.png');

let detailsBuildings3 = {
    buildingLeftWidth: 3,
    buildingHeigth: 12,
    buildingRigthWidth: 3,
    positionX: -6.5,
    positionZ: 5.7,
};
let cube3 = createBuildings(detailsBuildings3, '../img/grama.png');

cube.isDragging = false; // Propriedade para controle do movimento

// Função para iniciar o movimento ao clicar no objeto
function startDragging() {
    cube.isDragging = true;
}

// Função para parar o movimento ao soltar o clique
function stopDragging() {
    cube.isDragging = false;
}

// Função para mover o objeto com o ponteiro do mouse
function moveObject(event) {
    if (cube.isDragging) {
        const mouseCoords = {
            x: (event.clientX / window.innerWidth) * 2 - 1,
            y: -(event.clientY / window.innerHeight) * 2 + 1,
        };

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouseCoords, camera);

        const intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {
            const intersectPoint = intersects[0].point;
            cube.position.x = intersectPoint.x;
            cube.position.z = intersectPoint.z;

            var maiorDistancia = -Infinity;
            var objetoMaiorColisao = null;

            // Percorrer todas as interseções e encontrar a maior distância
            for (var i = 0; i < intersects.length; i++) {
                var distancia = intersects[i].distance;
                var objeto = intersects[i].object;

                if (distancia > maiorDistancia) {
                    maiorDistancia = distancia;
                    objetoMaiorColisao = objeto;
                }
            }

            // Agora você tem o objeto com a maior colisão
            console.log('Objeto com maior colisão:', objetoMaiorColisao);

            // Posicionar outro objeto na mesma posição do objeto de colisão
            if (objetoMaiorColisao) {
                // Supondo que você tenha o objeto desejado na variável 'objetoDesejado'

                // Obtém a posição do objeto colidido
                var posicaoColidido = objetoMaiorColisao.position.clone();

                // Define a posição do objeto desejado igual à posição do objeto colidido
                cube.position.copy(posicaoColidido);
            }
        }
    }
}

// Adiciona os ouvintes de eventos de clique e movimento ao elemento renderizado
renderer.domElement.addEventListener('mousedown', startDragging);
renderer.domElement.addEventListener('mouseup', stopDragging);
renderer.domElement.addEventListener('mousemove', moveObject);
