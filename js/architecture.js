import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

export function createArchitecture(scene) {
    try {
            // Визначаємо матеріали ОДИН РАЗ на початку
                    const wallMat = new THREE.MeshPhongMaterial({ color: 0xdddddd, transparent: true, opacity: 0.6 });
                            const glassMat = new THREE.MeshPhongMaterial({ color: 0x88ccff, transparent: true, opacity: 0.4 });
                                    const doorMat = new THREE.MeshPhongMaterial({ color: 0x8b4513 });

                                            // 1. ПЕРЕГОРОДКИ (Межі 1.8м від кожного краю)
                                                    const wallL = new THREE.Mesh(new THREE.BoxGeometry(0.05, 2.6, 3.5), wallMat);
                                                            wallL.position.set(-1.2, 1.3, 0); 
                                                                    scene.add(wallL);

                                                                            const wallR = new THREE.Mesh(new THREE.BoxGeometry(0.05, 2.6, 3.5), wallMat);
                                                                                    wallR.position.set(1.2, 1.3, 0); 
                                                                                            scene.add(wallR);

                                                                                                    // 2. САНВУЗОЛ ЗІ СКОСОМ (v2.8)
                                                                                                            const bathBack = new THREE.Mesh(new THREE.BoxGeometry(1.0, 2.6, 0.05), wallMat);
                                                                                                                    bathBack.position.set(-0.7, 1.3, -0.05); 
                                                                                                                            scene.add(bathBack);

                                                                                                                                    const bathSkew = new THREE.Mesh(new THREE.BoxGeometry(0.85, 2.6, 0.05), wallMat);
                                                                                                                                            bathSkew.rotation.y = Math.PI / 4;
                                                                                                                                                    bathSkew.position.set(0.1, 1.3, 0.25);
                                                                                                                                                            scene.add(bathSkew);

                                                                                                                                                                    // 3. ВІКНА ТА ДВЕРІ
                                                                                                                                                                            const win1 = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.2, 0.1), glassMat);
                                                                                                                                                                                    win1.position.set(-2.1, 1.4, 1.75); scene.add(win1);

                                                                                                                                                                                            const door = new THREE.Mesh(new THREE.BoxGeometry(0.8, 2.1, 0.1), doorMat);
                                                                                                                                                                                                    door.position.set(0.8, 1.05, 1.75); scene.add(door);

                                                                                                                                                                                                            // Зовнішній каркас
                                                                                                                                                                                                                    const frame = new THREE.Mesh(new THREE.BoxGeometry(6, 2.6, 3.5), 
                                                                                                                                                                                                                                new THREE.MeshPhongMaterial({ color: 0x444444, wireframe: true }));
                                                                                                                                                                                                                                        frame.position.y = 1.3;
                                                                                                                                                                                                                                                scene.add(frame);

                                                                                                                                                                                                                                                        console.log("АР: Конфлікт вичерпано. План v2.8 завантажено.");
                                                                                                                                                                                                                                                            } catch (error) {
                                                                                                                                                                                                                                                                    console.error("Помилка в архітектурі:", error);
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                        