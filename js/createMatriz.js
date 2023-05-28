// ----------------------- Cria Matriz chão ----------------//
function createMatriz() {
    // Cria a geometria do plano
    const geometry = new THREE.PlaneGeometry(24, 24);

    // Cria a textura do chão com imagem de grama
    const groundTexture = new THREE.TextureLoader().load('./img/grama.png');
    groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;

    // Quantas imagens são carregadas
    groundTexture.repeat.set(25, 25);

    // Cria o material do chão
    const material = new THREE.MeshBasicMaterial({ map: groundTexture });
    // Cria o objeto de malha para o chão
    const ground = new THREE.Mesh(geometry, material);

    // Rotaciona o chão para ficar paralelo ao eixo x
    ground.rotation.x = -Math.PI / 2;

    // Posiciona o chão abaixo dos prédios
    ground.position.y = -3;

    grounds.push(ground);

    // Adiciona o chão à cena
    scene.add(ground);

    // Cria a luz ambiente
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Cria a luz direcional
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);
}

createMatriz();
