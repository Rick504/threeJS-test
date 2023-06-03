// ------------------------ Criando Textura Predios -------------/
function createBuildings(element, texture) {
    let materia;
    // Cria o objeto de geometria para o prédio
    const geometry = new THREE.BoxGeometry(
        element.buildingLeftWidth,
        element.buildingHeigth,
        element.buildingRigthWidth
    );

    // Cria o material com textura para o prédio
    const textureLoader = new THREE.TextureLoader();
    if (texture) {
        let img = texture;
        const buildingTexture = textureLoader.load(img);
        material = new THREE.MeshPhongMaterial({ map: buildingTexture });
    } else {
        material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true,
        });
    }

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
            buildingHeigth: 0.5,
            buildingRigthWidth: 3.6,
            positionX: i * 3 + -10.4,
            positionZ: positionZ,
        };
        const building = createBuildings(detailsBuildings);
    }
}

const values = [27.4, 23.8, 20.2, 16.6, 13, 9.4, 5.8, 2.2, -1.4, -5, -8.6, -12.2];
const length = values.length;

for (const value of values) {
    createBuildingsMatriz(value);
}
