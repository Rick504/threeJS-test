// ------------ Adicionando IMagem --------------------/

function createImage(imgPath) {
    // Cria um objeto de geometria para o plano
    const geometry = new THREE.PlaneGeometry(5, 5);

    // Cria um material com textura para o plano
    const textureLoaders = new THREE.TextureLoader();
    const texture = textureLoaders.load(imgPath);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });

    // Cria o objeto de malha para o plano
    const planeMesh = new THREE.Mesh(geometry, material);

    planeMesh.position.x = 8;
    planeMesh.position.y = 7;
    planeMesh.position.z = 3;

    // Define rotação do plano
    planeMesh.rotation.x = 0;
    planeMesh.rotation.y = 1;
    planeMesh.rotation.z = 0;
    // Adiciona o plano à cena

    scene.add(planeMesh);
}
createImage('../img/Prefeitura.png');
