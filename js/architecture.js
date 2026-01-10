import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

export function createArchitecture(scene) {
    const wallMat = new THREE.MeshPhongMaterial({ color: 0xdddddd, transparent: true, opacity: 0.7 });
        const glassMat = new THREE.MeshPhongMaterial({ color: 0x88ccff, transparent: true, opacity: 0.4 });
            const doorMat = new THREE.MeshPhongMaterial({ color: 0x8b4513 });

                // 1. ПЕРЕГОРОДКИ СПАЛЕН (З ПРОРІЗАМИ ДЛЯ ДВЕРЕЙ)
                    // Ліва спальня (дві частини стіни, щоб між ними був прохід)
                        const wallL_bottom = new THREE.Mesh(new THREE.BoxGeometry(0.05, 2.6, 1.8), wallMat);
                            wallL_bottom.position.set(-1.2, 1.3, -0.85); // Глуха частина
                                scene.add(wallL_bottom);
                                    
                                        const wallL_top = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.5, 0.9), wallMat);
                                            wallL_top.position.set(-1.2, 2.35, 0.5); // Перемичка над дверима
                                                scene.add(wallL_top);

                                                    // Права спальня
                                                        const wallR_bottom = new THREE.Mesh(new THREE.BoxGeometry(0.05, 2.6, 1.8), wallMat);
                                                            wallR_bottom.position.set(1.2, 1.3, -0.85);
                                                                scene.add(wallR_bottom);

                                                                    const wallR_top = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.5, 0.9), wallMat);
                                                                        wallR_top.position.set(1.2, 2.35, 0.5);
                                                                            scene.add(wallR_top);

                                                                                // 2. САНВУЗОЛ (Завершення контуру)
                                                                                    // Задня стінка (паралельно фасаду)
                                                                                        const bathBack = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.6, 0.05), wallMat);
                                                                                            bathBack.position.set(-0.6, 1.3, 0.5); 
                                                                                                scene.add(bathBack);

                                                                                                    // Права стінка санвузла (якої не вистачало)
                                                                                                        const bathRight = new THREE.Mesh(new THREE.BoxGeometry(0.05, 2.6, 1.0), wallMat);
                                                                                                            bathRight.position.set(0.0, 1.3, 1.0); 
                                                                                                                scene.add(bathRight);

                                                                                                                    // Скошений перестінок з кутом 45 градусів (тепер повернутий правильно)
                                                                                                                        const bathSkew = new THREE.Mesh(new THREE.BoxGeometry(0.8, 2.6, 0.05), wallMat);
                                                                                                                            bathSkew.rotation.y = -Math.PI / 4; // Поворот у бік вітальні
                                                                                                                                bathSkew.position.set(0.3, 1.3, 1.45);
                                                                                                                                    scene.add(bathSkew);

                                                                                                                                        // 3. ЗОВНІШНІ ДВЕРІ ТА ВІКНА
                                                                                                                                            // Вхідні двері (зсунуті на 5 см лівіше, щоб не різати перестінок)
                                                                                                                                                const mainDoor = new THREE.Mesh(new THREE.BoxGeometry(0.8, 2.1, 0.12), doorMat);
                                                                                                                                                    mainDoor.position.set(0.75, 1.05, 1.75); // Корекція на 5 см від осі 1.2
                                                                                                                                                        scene.add(mainDoor);

                                                                                                                                                            // Вікна за планом
                                                                                                                                                                const winS1 = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.2, 0.1), glassMat);
                                                                                                                                                                    winS1.position.set(-2.1, 1.4, 1.75); scene.add(winS1);

                                                                                                                                                                        const winS2 = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.2, 0.1), glassMat);
                                                                                                                                                                            winS2.position.set(2.1, 1.4, 1.75); scene.add(winS2);

                                                                                                                                                                                // Каркас будівлі
                                                                                                                                                                                    const frame = new THREE.Mesh(new THREE.BoxGeometry(6, 2.6, 3.5), 
                                                                                                                                                                                            new THREE.MeshPhongMaterial({ color: 0x444444, wireframe: true }));
                                                                                                                                                                                                frame.position.y = 1.3;
                                                                                                                                                                                                    scene.add(frame);
                                                                                                                                                                                                    }
                                                                                                                                                                                                    