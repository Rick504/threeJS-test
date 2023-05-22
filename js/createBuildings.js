// ------------------------ Criando Textura Predios -------------/

let positionBuildings = { positionX: 3.5, positionZ: 3 };
let positionBuildingImg = { positionX: 4.3, positionZ: 4 };

function createBuildings() {
    const buildingHeigth = 2;
    const buildingLeftWidth = 4;
    const buildingRigthWidth = 5;

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
    building.position.x = positionBuildings.positionX; // aumente 1.5
    building.position.z = positionBuildings.positionZ; // aumente 1.5
    building.position.y = -3; // aumente 1.5

    // Define a altura do prédio
    building.scale.y = 0.1;

    // Adiciona o prédio ao array de prédios
    buildings.push(building);

    // Adiciona o prédio à cena
    scene.add(building);
}
createBuildings();
createImage(
    '../img/City_start_humanEDITADA.png',
    positionBuildingImg.positionX,
    positionBuildingImg.positionZ
);
