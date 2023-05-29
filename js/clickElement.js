//  ------------------- Função para lidar com o clique na cena
// function efectClickPosition(element) {
//     TweenMax.from(element, 2, {
//         y: -2,
//         yoyo: true,
//         repeat: -1,
//         ease: 'Power2.easeInOut',
//     });
// }

// function onDocumentClickBuildings(event) {
//     // Normaliza as coordenadas do clique
//     const mouse = new THREE.Vector2();
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//     // Define o raio de seleção a partir da posição do clique
//     const raycaster = new THREE.Raycaster();
//     raycaster.setFromCamera(mouse, camera);

//     // Verifica a interseção entre o raio e os prédios
//     let intersects = raycaster.intersectObjects(buildings);
//     let elementPosition = intersects[0].object;

//     // Verifica se ocorreu uma interseção
//     if (intersects.length > 0) {
//         efectClickPosition(elementPosition.position);
//         editPosition(elementPosition);
//     }
// }

// // Adiciona o evento de clique ao elemento da tela
// document.addEventListener('click', onDocumentClickBuildings, false);
