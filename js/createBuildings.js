// ------------------------ Criando Textura Predios -------------/

function createBuildings() {
    const buildingHeigth = 3;
    const buildingLeftWidth = 1;
    const buildingRigthWidth = 1;

    // Cria o objeto de geometria para o prédio
    const buildingGeometry = new THREE.BoxGeometry(
        buildingLeftWidth,
        buildingHeigth,
        buildingRigthWidth
    );

    // Cria o material com textura para o prédio
    const textureLoader = new THREE.TextureLoader();
    const buildingTexture = textureLoader.load('./img/teste.gif');
    const buildingMaterial = new THREE.MeshPhongMaterial({ map: buildingTexture });

    // Sem textura, com cor simples
    // const buildingMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide })

    // Cria o objeto de malha para o prédio
    const building = new THREE.Mesh(buildingGeometry, buildingMaterial);

    // ------------------------ Cria um Prédio ----------------------//
    // Define a posição do prédio
    building.position.x = 1.1; // aumente 1.5
    building.position.z = 1; // aumente 1.5

    // Define a altura do prédio
    building.scale.y = 0.1;

    // Adiciona o prédio ao array de prédios
    buildings.push(building);

    // Adiciona o prédio à cena
    scene.add(building);
}
createBuildings();
