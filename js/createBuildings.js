// ------------------------ Criando Textura Predios -------------/
function createBuildings(element, texture) {
    let img = texture;
    // Cria o objeto de geometria para o prédio
    const geometry = new THREE.BoxGeometry(
        element.buildingLeftWidth,
        element.buildingHeigth,
        element.buildingRigthWidth
    );

    // Cria o material com textura para o prédio
    const textureLoader = new THREE.TextureLoader();
    const buildingTexture = textureLoader.load(img);
    const material = new THREE.MeshPhongMaterial({ map: buildingTexture });

    // Sem textura, com cor simples
    // const buildingMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide })

    // Cria o objeto de malha para o prédio
    const building = new THREE.Mesh(geometry, material);

    // ------------------------ Cria um Prédio ----------------------//
    // Define a posição do prédio
    building.position.x = element.positionX; // aumente 1.5
    building.position.z = element.positionZ; // aumente 1.5
    building.position.y = 2; // aumente 1.5

    // Define a altura do prédio
    building.scale.y = 0.1;

    // Adiciona o prédio ao array de prédios
    buildings.push(building);

    // Adiciona o prédio à cena
    scene.add(building);

    return building;
}

function createBuildingsMatriz(positionZ) {
    for (let i = 0; i < 12; i++) {
        let detailsBuildings = {
            buildingLeftWidth: 3,
            buildingHeigth: 2,
            buildingRigthWidth: 3,
            positionX: i * 3 + -10.4,
            positionZ: positionZ,
        };
        createBuildings(detailsBuildings, '../img/grama2.png');
    }
}

const values = [22.5, 19.5, 16.5, 13.5, 10.5, 7.5, 4.5, 1.5, -1.5, -4.5, -7.5, -10.5];
const length = values.length;

for (const value of values) {
    createBuildingsMatriz(value);
}
