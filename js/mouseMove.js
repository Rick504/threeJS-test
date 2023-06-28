function createStructure(positionX, positionZ) {
    let detailsBuildings = {
        buildingLeftWidth: 3,
        buildingHeigth: 2.5,
        buildingRigthWidth: 3.6,
        positionX: positionX,
        positionZ: positionZ,
        type: 'structure',
    };
    const cube = createBuildings(detailsBuildings, '../img/grama.png');
    cube.userData.type = 'structure';
    group.add(cube);
}

createStructure(1.6, -1.4);
createStructure(7.6, -1.4);
createStructure(13.6, -1.4);

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onDocumentClickBuildings(event) {
    // Normaliza as coordenadas do clique
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Define o raio de seleção a partir da posição do clique
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    // Verifica a interseção entre o raio e os prédios
    let intersects = raycaster.intersectObjects(buildings);
    let elementPosition = intersects[0].object;

    // Verifica se ocorreu uma interseção
    if (intersects.length > 0) {
        // elementPosition.position.x = 1;
        console.log(elementPosition);
        clickCube(elementPosition);
    }
}

// Adiciona o evento de clique ao elemento da tela
document.addEventListener('click', onDocumentClickBuildings, false);

function clickCube(cube) {
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

            // Verificar colisões com os objetos do group
            const intersects = raycaster.intersectObjects(group.children, true);

            if (intersects.length > 0) {
                const objetoColidido = intersects[0].object;
                // console.log(objetoColidido.userData);

                if (objetoColidido.userData.isBlock) {
                    return;
                }

                // Obter a posição do objeto colidido em relação ao group
                const posicaoRelativa = objetoColidido.position
                    .clone()
                    .sub(group.position);

                // Mover o cube para a posição do objeto colidido
                // cube.position.copy(posicaoRelativa);

                cube.position.set(
                    posicaoRelativa.x,
                    cube.position.y,
                    posicaoRelativa.z
                );
            }
        }
    }

    // Adiciona os ouvintes de eventos de clique e movimento ao elemento renderizado
    renderer.domElement.addEventListener('mousedown', startDragging);
    renderer.domElement.addEventListener('mouseup', stopDragging);
    renderer.domElement.addEventListener('mousemove', moveObject);
}
