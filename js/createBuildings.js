// ------------------------ Criando Textura Predios -------------/

function createBuildings(element) {
    // Cria o objeto de geometria para o prédio
    const buildingGeometry = new THREE.BoxGeometry(
        element.buildingLeftWidth,
        element.buildingHeigth,
        element.buildingRigthWidth
    );

    // Cria o material com textura para o prédio
    const textureLoader = new THREE.TextureLoader();
    const buildingTexture = textureLoader.load('../img/grama2.png');
    const buildingMaterial = new THREE.MeshPhongMaterial({ map: buildingTexture });

    // Sem textura, com cor simples
    // const buildingMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide })

    // Cria o objeto de malha para o prédio
    const building = new THREE.Mesh(buildingGeometry, buildingMaterial);

    // ------------------------ Cria um Prédio ----------------------//
    // Define a posição do prédio
    building.position.x = element.positionX; // aumente 1.5
    building.position.z = element.positionZ; // aumente 1.5
    building.position.y = -3; // aumente 1.5

    // Define a altura do prédio
    building.scale.y = 0.1;

    // Adiciona o prédio ao array de prédios
    buildings.push(building);

    // Adiciona o prédio à cena
    scene.add(building);

    return building;
}

// for (let i = -2.6; i < 5; i++) {
//     let detailsBuildings = {
//         buildingLeftWidth: 4,
//         buildingHeigth: 4,
//         buildingRigthWidth: 5,
//         positionX: i * 4,
//         positionZ: i * 0,
//         positionImg: { positionX: 4.3, positionZ: 4 },
//     };
//     createBuildings(detailsBuildings);
// }

let detailsBuilding = {
    buildingLeftWidth: 4,
    buildingHeigth: 4,
    buildingRigthWidth: 5,
    positionX: 3.5,
    positionZ: 8,
    positionImg: { positionX: 4.3, positionZ: 4 },
};
let building_1 = createBuildings(detailsBuilding);

let detailsBuilding2 = {
    buildingLeftWidth: 4,
    buildingHeigth: 4,
    buildingRigthWidth: 5,
    positionX: 5,
    positionZ: 8,
    positionImg: { positionX: 4.3, positionZ: 4 },
};
let building_2 = createBuildings(detailsBuilding2);

// Verifique a colisão
if (detectCollision(building_1, building_2)) {
    // Colisão ocorreu
    console.log('Colisão detectada!');

    // Modificar a opacidade do objeto1
    building_1.material.opacity = 0.5;
    building_1.material.transparent = true;

    // Atualizar a renderização do objeto1
    building_1.material.needsUpdate = true;
} else {
    // Não há colisão
    console.log('Nenhuma colisão detectada.');
}
