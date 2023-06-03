const buttonGeometry = new THREE.PlaneGeometry(1, 1);
const buttonMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
const buttonMesh = new THREE.Mesh(buttonGeometry, buttonMaterial);
buttonMesh.position.set(0, 8, 1);
scene.add(buttonMesh);

const textGeometry = new THREE.TextGeometry('Clique-me', {
    font: 'helvetiker', // Fonte do texto (deve estar disponível)
    size: 12, // Tamanho do texto
    height: 1, // Espessura do texto
});
const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const textMesh = new THREE.Mesh(textGeometry, textMaterial);
textMesh.position.set(-40, -10, 0);

function onButtonClick() {
    alert('Botão clicado!');
}

function checkButtonClick(event) {
    const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(buttonMesh);
    if (intersects.length > 0) {
        onButtonClick();
    }
}

window.addEventListener('click', checkButtonClick);
