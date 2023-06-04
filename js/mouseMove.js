let detailsBuildings = {
    buildingLeftWidth: 3,
    buildingHeigth: 2.5,
    buildingRigthWidth: 3.6,
    positionX: 1,
    positionZ: 0.3,
};
const cube = createBuildings(detailsBuildings, '../img/grama.png');
grupo.add(cube);
// cube.rotation.set(0.3, 15, 0);

cube.isDragging = false; // Propriedade para controle do movimento

// Função para iniciar o movimento ao clicar no objeto
function startDragging() {
    cube.isDragging = true;
}

// Função para parar o movimento ao soltar o clique
function stopDragging() {
    cube.isDragging = false;
}

function moveObject(event) {
    if (cube.isDragging) {
        const mouseCoords = {
            x: (event.clientX / window.innerWidth) * 2 - 1,
            y: -(event.clientY / window.innerHeight) * 2 + 1,
        };

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouseCoords, camera);

        // Verificar colisões com os objetos do grupo
        const intersects = raycaster.intersectObjects(grupo.children, true);

        if (intersects.length > 0) {
            const objetoColidido = intersects[0].object;

            // Obter a posição do objeto colidido em relação ao grupo
            const posicaoRelativa = objetoColidido.position.clone().sub(grupo.position);

            // Mover o cube para a posição do objeto colidido
            cube.position.copy(posicaoRelativa);
        }
    }
}

// Adiciona os ouvintes de eventos de clique e movimento ao elemento renderizado
renderer.domElement.addEventListener('mousedown', startDragging);
renderer.domElement.addEventListener('mouseup', stopDragging);
renderer.domElement.addEventListener('mousemove', moveObject);
