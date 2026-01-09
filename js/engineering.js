import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

export function createPlumbing(scene) {
    const waterMat = new THREE.MeshPhongMaterial({ color: 0x0000ff });
        const drainMat = new THREE.MeshPhongMaterial({ color: 0x553311 });

            // БАК ПОЗА МОДУЛЕМ (Синхронізація з v2.16)
                const tank = new THREE.Mesh(
                        new THREE.CylinderGeometry(0.4, 0.4, 1.8, 16),
                                waterMat
                                    );
                                        // Змінюємо -2.0 на 3.5, щоб винести його на правий бік (якщо дивитися на фасад)
                                            // Та коригуємо Z на -2.0, щоб він був за модулем
                                                tank.position.set(3.65, 0.93, -1.20); 
                                                    scene.add(tank);

                                                        // БОЙЛЕР (Внутрішній, у куті санвузла)
                                                            const boiler = new THREE.Mesh(
                                                                    new THREE.CylinderGeometry(0.25, 0.25, 0.7, 16),
                                                                            new THREE.MeshPhongMaterial({ color: 0xeeeeee })
                                                                                );
                                                                                    // Зміщуємо в кут санвузла за кресленням
                                                                                        boiler.position.set(-2.5, 1.8, 1.3); 
                                                                                            scene.add(boiler);

                                                                                                // ТРАП (Точно під душовою лійкою)
                                                                                                    const drain = new THREE.Mesh(
                                                                                                            new THREE.PlaneGeometry(0.2, 0.2),
                                                                                                                    drainMat
                                                                                                                        );
                                                                                                                            drain.rotation.x = -Math.PI / 2;
                                                                                                                                drain.position.set(-2.6, 0.01, 1.3);
                                                                                                                                    scene.add(drain);

                                                                                                                                        console.log("ВК: Ревiзiя координат під версію v2.16 завершена");
                                                                                                                                        }
                                                                                                                                        