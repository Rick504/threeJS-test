var object;
var mouse = new THREE.Vector2();
var raycaster = new THREE.Raycaster();
var offset = new THREE.Vector3();
var isDragging = false;
const buildings = [];
const grounds = [];

// Cria a cena
const scene = new THREE.Scene();

let zoomCam = 10;

// Cria a câmera
const camera = new THREE.PerspectiveCamera(
    zoomCam,
    window.innerWidth / window.innerHeight,
    1.1,
    1000
);

// camera.position.set(ver de lado, altura, distancia de frente)
camera.position.set(40, 40, 50);

let downCam = 0;
let rigthCam = 6;
let leftCam = 5;
camera.lookAt(leftCam, downCam, rigthCam);

// Cria o renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ------------------------ Cria 3 Predios ----------------------//
// Cria os 3 elementos conforme o numero de limite no for
// for (let index = 0; index < 3; index++) {
//     // Cria o objeto de malha para o prédio
//     const building = new THREE.Mesh(buildingGeometry, buildingMaterial)

//     // Define a posição do prédio
//     building.position.x = index
//     building.position.z = index

//     // Define a altura do prédio
//     building.scale.y = 2

//     // Adiciona o prédio ao array de prédios
//     buildings.push(building)

//     // Adiciona o prédio à cena
//     scene.add(building)
// }

// Anima a cena
// Variáveis para armazenar as coordenadas iniciais do movimento do mouse
let mouseX = 0;
let mouseY = 0;

// Função chamada quando o mouse é movido
function onMouseMove(event) {
    // Atualiza as coordenadas do mouse
    mouseX = event.clientX;
    mouseY = event.clientY;

    // console.log(mouseX, mouseY);
}

// Adiciona o evento de movimento do mouse ao elemento do documento
document.addEventListener('mousemove', onMouseMove, false);

// Função de animação para atualizar a posição da câmera
function animate() {
    requestAnimationFrame(animate);

    // let downCam = 0;
    // camera.lookAt(mouseY / 90, downCam, mouseX / 90);

    // Renderiza a cena
    renderer.render(scene, camera);
}

// Chama a função de animação para iniciar o loop de renderização
animate();
