let detailsBuildings = {
    buildingLeftWidth: 3,
    buildingHeigth: 2,
    buildingRigthWidth: 3.6,
    positionX: -1.4,
    positionZ: -5,
};
let cube = createBuildings(detailsBuildings, '../img/grama.png');
// grupo.add(mainMatrix);
cube.rotation.set(0.2, 15, 0);

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

        const intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {
            // Agora você tem o objeto colidido
            const objetoColidido = intersects[0].object;

            // Define a nova posição do objeto 'cube' para ser a mesma posição do objeto colidido
            cube.position.copy(objetoColidido.position);
        }
    }
}

// Adiciona os ouvintes de eventos de clique e movimento ao elemento renderizado
renderer.domElement.addEventListener('mousedown', startDragging);
renderer.domElement.addEventListener('mouseup', stopDragging);
renderer.domElement.addEventListener('mousemove', moveObject);
