let detailsBuildings = {
    buildingLeftWidth: 3,
    buildingHeigth: 12,
    buildingRigthWidth: 3,
    positionX: -1.5,
    positionZ: 1.7,
};
let cube = createBuildings(detailsBuildings, '../img/grama.png');

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
        }
    }
}

// Adiciona os ouvintes de eventos de clique e movimento ao elemento renderizado
renderer.domElement.addEventListener('mousedown', startDragging);
renderer.domElement.addEventListener('mouseup', stopDragging);
renderer.domElement.addEventListener('mousemove', moveObject);
