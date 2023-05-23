function detectCollision(object1, object2) {
    // Obtém as bounding boxes dos objetos
    const box1 = new THREE.Box3().setFromObject(object1);
    const box2 = new THREE.Box3().setFromObject(object2);

    // Verifica se as bounding boxes se sobrepõem
    return box1.intersectsBox(box2);
}
