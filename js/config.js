const buildings = [];

// Cria a cena
const scene = new THREE.Scene();

// Cria a câmera
let zoomCam = 8;

const camera = new THREE.PerspectiveCamera(
    zoomCam,
    window.innerWidth / window.innerHeight,
    1.1,
    1000
);

camera.position.set(40, 40, 50);
camera.lookAt(0, 6, 5);

// Cria o renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Função de animação para atualizar a posição da câmera
function animate() {
    requestAnimationFrame(animate);

    // Renderiza a cena
    renderer.render(scene, camera);
}

// Chama a função de animação para iniciar o loop de renderização
animate();
