// ------------ Adicionando IMagem --------------------/

function createImage(imgPath, positionX, positionZ) {
    // Cria um objeto de geometria para o plano
    const planeGeometrys = new THREE.PlaneGeometry(6, 5);

    // Cria um material com textura para o plano
    const textureLoaders = new THREE.TextureLoader();
    const texture = textureLoaders.load(imgPath);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });

    // Cria o objeto de malha para o plano
    const planeMesh = new THREE.Mesh(planeGeometrys, material);

    const positionY = -2;
    planeMesh.position.set(positionX, positionY, positionZ);

    // Define rotação do plano
    planeMesh.rotation.x = 218.8; // Rotaciona o plano para ficar na horizontal
    planeMesh.rotation.y = 220;
    planeMesh.rotation.z = 6.9;
    // Adiciona o plano à cena

    console.log(planeMesh);

    scene.add(planeMesh);
}
// createImage('./img/torre.png')
// createImage('../img/City_start_humanEDITADA.png', 4.3, 4);
