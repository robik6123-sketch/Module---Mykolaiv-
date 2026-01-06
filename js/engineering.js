import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

export function createPlumbing(scene) {
    const waterMat = new THREE.MeshPhongMaterial({ color: 0x0000ff });
        const drainMat = new THREE.MeshPhongMaterial({ color: 0x553311 });

            // БАК ПОЗА МОДУЛЕМ (Винесли за стінку по осі Z)
                const tank = new THREE.Mesh(
                        new THREE.CylinderGeometry(0.4, 0.4, 1.8, 16),
                                waterMat
                                    );
                                        tank.position.set(-2.0, 1, -2.5); // Тепер він зовні (було -1.2)
                                            scene.add(tank);

                                                // БОЙЛЕР (Залишаємо всередині, але в куті)
                                                    const boiler = new THREE.Mesh(
                                                            new THREE.CylinderGeometry(0.25, 0.25, 0.7, 16),
                                                                    new THREE.MeshPhongMaterial({ color: 0xeeeeee })
                                                                        );
                                                                            boiler.position.set(-2.6, 1.8, 1.4); 
                                                                                scene.add(boiler);

                                                                                    // ТРАП У КУТІ САНВУЗЛА
                                                                                        const drain = new THREE.Mesh(
                                                                                                new THREE.PlaneGeometry(0.2, 0.2),
                                                                                                        drainMat
                                                                                                            );
                                                                                                                drain.rotation.x = -Math.PI / 2;
                                                                                                                    drain.position.set(-2.7, 0.01, 1.4); // Точне місце трапа
                                                                                                                        scene.add(drain);

                                                                                                                            console.log("ВК: Координати скориговані згідно з планом");
                                                                                                                            }
                                                                                                                            