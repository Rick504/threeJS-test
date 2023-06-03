const buildings = [];
const scene = new THREE.Scene();

let zoomCam = 20;

const camera = new THREE.PerspectiveCamera(
    zoomCam,
    window.innerWidth / window.innerHeight,
    1.1,
    1000
);

camera.position.set(0, 20, 50);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();
