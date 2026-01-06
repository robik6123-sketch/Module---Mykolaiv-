import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

export function createPlumbing(scene) {
    // Матеріал для труб (синій - вода, коричневий - каналізація)
        const waterMat = new THREE.MeshPhongMaterial({ color: 0x0000ff });
            const drainMat = new THREE.MeshPhongMaterial({ color: 0x553311 });

                // Бак для води (вертикальний циліндр)
                    const tank = new THREE.Mesh(
                            new THREE.CylinderGeometry(0.4, 0.4, 1.8, 16),
                                    waterMat
                                        );
                                            tank.position.set(-2.5, 1, -1.2); // Кут санвузла
                                                scene.add(tank);

                                                    // Бойлер (менший циліндр)
                                                        const boiler = new THREE.Mesh(
                                                                new THREE.CylinderGeometry(0.25, 0.25, 0.7, 16),
                                                                        new THREE.MeshPhongMaterial({ color: 0xeeeeee })
                                                                            );
                                                                                boiler.position.set(-2.5, 1.8, -1.2);
                                                                                    scene.add(boiler);

                                                                                        // Трап каналізації (плоский квадрат на підлозі)
                                                                                            const drain = new THREE.Mesh(
                                                                                                    new THREE.PlaneGeometry(0.2, 0.2),
                                                                                                            drainMat
                                                                                                                );
                                                                                                                    drain.rotation.x = -Math.PI / 2;
                                                                                                                        drain.position.set(-2.2, 0.01, -1.0);
                                                                                                                            scene.add(drain);

                                                                                                                                console.log("ВК: Водопостачання та каналізація підключені");
                                                                                                                                }
                                                                                                                                