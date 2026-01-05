import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

export function createArchitecture(scene) {
    const wallMat = new THREE.MeshPhongMaterial({ color: 0xdddddd, transparent: true, opacity: 0.9 });
        
            // Основний об'єм модуля 6х3.5х2.6
                const house = new THREE.Mesh(
                        new THREE.BoxGeometry(6, 2.6, 3.5), 
                                wallMat
                                    );
                                        house.position.y = 1.3; // Піднімаємо на половину висоти над землею
                                            
                                                scene.add(house);
                                                    console.log("АР: Модуль побудовано");
                                                    }
                                                    