// ----------------------- Cria Matriz chão ----------------//
function createLighting() {
    // Cria a luz ambiente
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Cria a luz direcional
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);
}

createLighting();
