function createImage(imgPath) {
    const geometry = new THREE.PlaneGeometry(3.7, 2.7);

    const textureLoaders = new THREE.TextureLoader();
    const texture = textureLoaders.load(imgPath);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });

    const imgMesh = new THREE.Mesh(geometry, material);

    imgMesh.position.x = 0;
    imgMesh.position.y = 4;
    imgMesh.position.z = 0;

    imgMesh.rotation.x = 0;
    imgMesh.rotation.y = 0;

    scene.add(imgMesh);

    return imgMesh;
}

let imgMesh = createImage('../img/santuario(5x5).png');

function atualizar() {
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(atualizar);
