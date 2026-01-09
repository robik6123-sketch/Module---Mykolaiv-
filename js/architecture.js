 import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

 export function createArchitecture(scene) {
     const wallMat = new THREE.MeshPhongMaterial({ color: 0xdddddd, transparent: true, opacity: 0.6 });
         const glassMat = new THREE.MeshPhongMaterial({ color: 0x88ccff, transparent: true, opacity: 0.4 });
             const doorMat = new THREE.MeshPhongMaterial({ color: 0x8b4513 });

                 // Основний корпус (стіни)
                     const house = new THREE.Mesh(new THREE.BoxGeometry(6, 2.6, 3.5), wallMat);
                         house.position.y = 1.3;
                             scene.add(house);

                                 // Внутрішня перегородка санвузла (відділяємо зону де бак і трап)
                                     const partition = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.6, 1.5), wallMat);
                                         partition.position.set(-1.8, 1.3, 1.0);
                                             scene.add(partition);

                                                 // Панорамне вікно (фасад)
                                                     const windowMain = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1.8, 0.1), glassMat);
                                                         windowMain.position.set(1.0, 1.3, 1.75);
                                                             scene.add(windowMain);

                                                                 // Вхідні двері
                                                                     const door = new THREE.Mesh(new THREE.BoxGeometry(0.9, 2.1, 0.1), doorMat);
                                                                         door.position.set(-1.0, 1.05, 1.75);
                                                                             scene.add(door);

                                                                                 console.log("АР: Вікна, двері та перегородки встановлено");
                                                                                 }                                            
                                                                                                                             