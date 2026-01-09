import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

export function createEnergy(scene) {
    const panelMat = new THREE.MeshPhongMaterial({ color: 0x1a1a3a, side: THREE.DoubleSide });
        
            // Навіс 5 кВт (приблизно 6х4 метри, щоб закрити дах і зробити винос)
                const canopy = new THREE.Mesh(
                        new THREE.PlaneGeometry(6.5, 4.5),
                                panelMat
                                    );
                                        
                                            // Встановлюємо під кутом 30 градусів та піднімаємо над модулем
                                                canopy.rotation.x = -Math.PI / 6; // кут нахилу
                                                    canopy.position.set(0, 3.2, 0);
                                                        scene.add(canopy);

                                                            // Енерговузол (інвертор) - невелика коробка на стіні
                                                                const inverter = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.6, 0.2), new THREE.MeshPhongMaterial({color: 0xffffff}));
                                                                    inverter.position.set(2.8, 1.5, -1.7);
                                                                        scene.add(inverter);

                                                                            console.log("Е: Сонячний навіс 5 кВт та енерговузол додано");
                                                                            }
                                                                            