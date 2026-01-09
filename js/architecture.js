    import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

    export function createArchitecture(scene) {
        const wallMat = new THREE.MeshPhongMaterial({ color: 0xdddddd, transparent: true, opacity: 0.6 });
            const glassMat = new THREE.MeshPhongMaterial({ color: 0x88ccff, transparent: true, opacity: 0.4 });
                const doorMat = new THREE.MeshPhongMaterial({ color: 0x8b4513 });

                    // Центр координат сцени - це центр вітальні. 
                        // Весь модуль 6000мм (6 одиниць у Three.js)

                            // 1. ПЕРЕГОРОДКИ СПАЛЕН (повні, від стіни до стіни)
                                const wallLeft = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.6, 3.5), wallMat);
                                    wallLeft.position.set(-1.2, 1.3, 0); // Межа 1800мм від лівого краю
                                        scene.add(wallLeft);

                                            const wallRight = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.6, 3.5), wallMat);
                                                wallRight.position.set(1.2, 1.3, 0); // Межа 1800мм від правого краю
                                                    scene.add(wallRight);

                                                        // 2. САНВУЗОЛ ЗІ СКОСОМ (Логіка вашого плану)
                                                            // Стіна вздовж вітальні
                                                                const bathLong = new THREE.Mesh(new THREE.BoxGeometry(1.0, 2.6, 0.1), wallMat);
                                                                    bathLong.position.set(-0.7, 1.3, -0.05); 
                                                                        scene.add(bathLong);

                                                                            // Скошена стіна (діагональ)
                                                                                const bathSkew = new THREE.Mesh(new THREE.BoxGeometry(0.85, 2.6, 0.1), wallMat);
                                                                                    bathSkew.rotation.y = Math.PI / 4;
                                                                                        bathSkew.position.set(0.1, 1.3, 0.25);
                                                                                            scene.add(bathSkew);

                                                                                                // 3. ВІКНА (Жовті лінії з плану)
                                                                                                    const win1 = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.5, 0.1), glassMat);
                                                                                                        win1.position.set(-2.4, 1.3, 1.75); scene.add(win1); // Спальня 1

                                                                                                            const win2 = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.5, 0.1), glassMat);
                                                                                                                win2.position.set(2.4, 1.3, 1.75); scene.add(win2); // Спальня 2

                                                                                                                    const winMain = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.2, 0.1), glassMat);
                                                                                                                        winMain.position.set(0, 1.6, -1.75); scene.add(winMain); // Центральне вікно

                                                                                                                            // 4. ДВЕРІ (Коричневі лінії)
                                                                                                                                const doorMain = new THREE.Mesh(new THREE.BoxGeometry(0.9, 2.1, 0.1), doorMat);
                                                                                                                                    doorMain.position.set(0.85, 1.05, 1.75); // Вхід поруч зі спальнею 2
                                                                                                                                        scene.add(doorMain);

                                                                                                                                            // 5. ЗОВНІШНІЙ КОНТУР (прозорий для огляду)
                                                                                                                                                const frame = new THREE.Mesh(new THREE.BoxGeometry(6, 2.6, 3.5), 
                                                                                                                                                        new THREE.MeshPhongMaterial({ color: 0x000000, wireframe: true, opacity: 0.1 }));
                                                                                                                                                            frame.position.y = 1.3;
                                                                                                                                                                scene.add(frame);

                                                                                                                                                                    console.log("АР: Планування v2.8 (3 секції) реалізовано");
                                                                                                                                                                    }                                                                                              
                                                                                                                                                                                                                                                                  