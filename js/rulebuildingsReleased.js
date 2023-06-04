// Setando isBlock em todos os buildings criados
for (let i = 0; i < buildings.length; i++) {
    buildings[i].userData = { isBlock: true };
}

// Array de buildings liberados
const buildingsReleased = [
    100, 101, 102, 103, 104, 105, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
];

// For do Array de buildings liberados
for (let i = 0; i < buildingsReleased.length; i++) {
    const buildingIndex = buildingsReleased[i];
    if (buildingIndex < buildings.length) {
        buildings[buildingIndex].userData.isBlock = false;
    }
}

for (let i = 0; i < buildings.length; i++) {
    if (buildings[i].userData.isBlock) {
        buildings[i].material.transparent = true;
        buildings[i].material.opacity = 0.5;
        buildings[i].material.color.setHex(0x808080); // Cor cinza em hexadecimal
    }
}

// console.log(buildings);
