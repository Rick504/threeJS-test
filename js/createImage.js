// ------------ Adicionando IMagem --------------------/

function createImage(imgPath) {
    // Cria um objeto de geometria para o plano
    const planeGeometrys = new THREE.PlaneGeometry(6, 4.5);

    // Cria um material com textura para o plano
    const textureLoaders = new THREE.TextureLoader();
    const texture = textureLoaders.load(imgPath);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });

    // Cria o objeto de malha para o plano
    const planeMesh = new THREE.Mesh(planeGeometrys, material);

    // Define a posição e rotação do plano
    planeMesh.position.set(9, 0, 10);
    planeMesh.rotation.x = -Math.PI / 50; // Rotaciona o plano para ficar na horizontal
    planeMesh.rotation.y = 2200;
    // Adiciona o plano à cena
    scene.add(planeMesh);
}
// createImage('./img/torre.png')
createImage('./img/City_start_humanEDITADA.png');
