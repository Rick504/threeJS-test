// ------------ Adicionando IMagem --------------------/

function createImage(imgPath) {
    // Cria um objeto de geometria para o plano
    const geometry = new THREE.PlaneGeometry(3.7, 2.7);

    // Cria um material com textura para o plano
    const textureLoaders = new THREE.TextureLoader();
    const texture = textureLoaders.load(imgPath);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });

    // Cria o objeto de malha para o plano
    const imgMesh = new THREE.Mesh(geometry, material);

    imgMesh.position.x = 0.2;
    imgMesh.position.y = 4;
    imgMesh.position.z = 4.1;

    // Define rotação do plano
    imgMesh.rotation.x = 12.57;
    imgMesh.rotation.y = 7.15;

    imgMesh.scale.y = 1.25;
    imgMesh.scale.x = 1.2;

    scene.add(imgMesh);

    return imgMesh;
}

let imgMesh = createImage('../img/santuario(5x5).png');

// Criar uma função de atualização personalizada para a animação
function atualizar() {
    // Atualize aqui os objetos e animações do seu cenário 3D

    // console.log((imgMesh.scale.y += 0.01));

    // Renderize a cena usando o seu WebGLRenderer
    renderer.render(scene, camera);
}

// Defina a função de atualização como o loop de animação
renderer.setAnimationLoop(atualizar);
