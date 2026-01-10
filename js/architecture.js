      import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

      export function createArchitecture(scene) {
          const wallMat = new THREE.MeshPhongMaterial({ color: 0xdddddd, transparent: true, opacity: 0.6 });
              const glassMat = new THREE.MeshPhongMaterial({ color: 0x88ccff, transparent: true, opacity: 0.4 });
                  const doorMat = new THREE.MeshPhongMaterial({ color: 0x8b4513 });

                      // 1. ПЕРЕГОРОДКИ СПАЛЕН (точно за розміром 1800мм)
                          const wallL = new THREE.Mesh(new THREE.BoxGeometry(0.05, 2.6, 3.5), wallMat);
                              wallL.position.set(-1.2, 1.3, 0); // Ліва межа вітальні
                                  scene.add(wallL);

                                      const wallR = new THREE.Mesh(new THREE.BoxGeometry(0.05, 2.6, 3.5), wallMat);
                                          wallR.position.set(1.2, 1.3, 0); // Права межа вітальні
                                              scene.add(wallR);

                                                  // 2. САНВУЗОЛ v2.8 (Складна форма)
                                                      // Задня стінка С/В (від спальні до скосу)
                                                          const bathBack = new THREE.Mesh(new THREE.BoxGeometry(1.0, 2.6, 0.05), wallMat);
                                                              bathBack.position.set(-0.7, 1.3, -0.05); 
                                                                  scene.add(bathBack);

                                                                      // Скошена стінка з дверима (кут 45 градусів за планом)
                                                                          const bathSkew = new THREE.Mesh(new THREE.BoxGeometry(0.85, 2.6, 0.05), wallMat);
                                                                              bathSkew.rotation.y = Math.PI / 4;
                                                                                  bathSkew.position.set(0.1, 1.3, 0.25);
                                                                                      scene.add(bathSkew);

                                                                                          // 3. ВХІДНІ ДВЕРІ (зміщені праворуч, 3500-4100 за кресленням)
                                                                                              const mainDoor = new THREE.Mesh(new THREE.BoxGeometry(0.8, 2.1, 0.1), doorMat);
                                                                                                  mainDoor.position.set(0.8, 1.05, 1.75);
                                                                                                      scene.add(mainDoor);

                                                                                                          // 4. ВІКНА (за кольоровими мітками плану)
                                                                                                              // Вікна спалень (на фасаді)
                                                                                                                  const winS1 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 0.1), glassMat);
                                                                                                                      winS1.position.set(-2.1, 1.4, 1.75); scene.add(winS1);

                                                                                                                          const winS2 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 0.1), glassMat);
                                                                                                                              winS2.position.set(2.1, 1.4, 1.75); scene.add(winS2);

                                                                                                                                  // Центральне вікно (на тильній стороні)
                                                                                                                                      const winMid = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.0, 0.1), glassMat);
                                                                                                                                          winMid.position.set(0, 1.5, -1.75); scene.add(winMid);

                                                                                                                                              console.log("АР: Геометрія v2.8 успішно інтегрована в 3D");
                                                                                                                                              }                                                                               
                                                                                                                                                                                                                             