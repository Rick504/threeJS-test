const grupo = new THREE.Group();

function createMainMatrix(element, texture) {
    const geometry = new THREE.BoxGeometry(
        element.buildingLeftWidth,
        element.buildingHeigth,
        element.buildingRigthWidth
    );

    const textureLoader = new THREE.TextureLoader();
    const img = texture;
    const buildingTexture = textureLoader.load(img);
    const material = new THREE.MeshPhongMaterial({ map: buildingTexture });

    const mainMatrix = new THREE.Mesh(geometry, material);

    mainMatrix.position.x = element.positionX;
    mainMatrix.position.z = element.positionZ;
    mainMatrix.position.y = 2;

    scene.add(mainMatrix);

    return mainMatrix;
}

let detailsMainMatrix = {
    buildingLeftWidth: 36,
    buildingHeigth: 0,
    buildingRigthWidth: 43,
    positionX: 6.1,
    positionZ: 7.5,
};
const mainMatrix = createMainMatrix(detailsMainMatrix, '../img/grama.png');
grupo.add(mainMatrix);

// ------------------------ Criando Textura Predios -------------/
function createBuildings(element, texture) {
    let materia;
    const geometry = new THREE.BoxGeometry(
        element.buildingLeftWidth,
        element.buildingHeigth,
        element.buildingRigthWidth
    );

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
    const building = new THREE.Mesh(geometry, material);

    building.position.x = element.positionX;
    building.position.z = element.positionZ;
    building.position.y = 2;

    building.scale.y = 0.01;

    buildings.push(building);

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
        grupo.add(building);
    }
}

grupo.rotation.set(0.2, 15, 0);

scene.add(grupo);

const values = [27.4, 23.8, 20.2, 16.6, 13, 9.4, 5.8, 2.2, -1.4, -5, -8.6, -12.2];
const length = values.length;

for (const value of values) {
    createBuildingsMatriz(value);
}
