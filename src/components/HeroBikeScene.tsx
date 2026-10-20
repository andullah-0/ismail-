import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Eye, RotateCw, Layers, ShieldCheck, Zap } from 'lucide-react';

type ComponentView = 'full' | 'motor' | 'battery' | 'cockpit';

export const HeroBikeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeView, setActiveView] = useState<ComponentView>('full');
  const [isRotating, setIsRotating] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);

  // References to keep animation loop clean without GC
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    bikeGroup: THREE.Group;
    motorMesh: THREE.Group;
    batteryMesh: THREE.Group;
    cockpitMesh: THREE.Group;
    frontWheelGroup: THREE.Group;
    rearWheelGroup: THREE.Group;
    targetRotationY: number;
    targetRotationX: number;
    targetCamZ: number;
    targetCamY: number;
    targetCamX: number;
    currentCamZ: number;
    currentCamY: number;
    currentCamX: number;
  } | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 1.1, 4.3);

    // 2. Renderer with PBR color pipeline
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 3. Studio Environment Map (PMREMGenerator + RoomEnvironment)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 4. Lighting Rig (Warm Key Light + Cool Cyan Fill + Soft Hemisphere Light)
    const keyLight = new THREE.DirectionalLight(0xfffaed, 2.8);
    keyLight.position.set(3.5, 5, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 15;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x0284c7, 1.4);
    fillLight.position.set(-3.5, 2.5, -2);
    scene.add(fillLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xe2e8f0, 0.95);
    hemiLight.position.set(0, 8, 0);
    scene.add(hemiLight);

    // 5. Contact Shadow Plane
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const shadowCtx = shadowCanvas.getContext('2d');
    if (shadowCtx) {
      const grad = shadowCtx.createRadialGradient(128, 128, 10, 128, 128, 120);
      grad.addColorStop(0, 'rgba(15, 23, 42, 0.45)');
      grad.addColorStop(0.5, 'rgba(15, 23, 42, 0.18)');
      grad.addColorStop(1, 'rgba(15, 23, 42, 0)');
      shadowCtx.fillStyle = grad;
      shadowCtx.fillRect(0, 0, 256, 256);
    }
    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(4.2, 4.2),
      new THREE.MeshBasicMaterial({
        map: shadowTexture,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
      })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.78;
    scene.add(shadowPlane);

    // 6. Materials Library for Motorcycle
    const bodyFairingMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7, // Glossy metallic electric blue
      metalness: 0.85,
      roughness: 0.2,
      clearcoat: 0.95,
      clearcoatRoughness: 0.1,
    });

    const darkChassisMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b, // Dark industrial chassis steel
      metalness: 0.8,
      roughness: 0.35,
    });

    const brushedChromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9, // Polished chrome / aluminum
      metalness: 0.95,
      roughness: 0.12,
    });

    const goldForkMaterial = new THREE.MeshStandardMaterial({
      color: 0xd97706, // Anodized gold motorcycle inverted fork
      metalness: 0.9,
      roughness: 0.2,
    });

    const rubberTireMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // Deep matte vulcanized tire rubber
      metalness: 0.05,
      roughness: 0.9,
    });

    const seatLeatherMaterial = new THREE.MeshStandardMaterial({
      color: 0x18181b, // Textured black motorcycle seat leather
      metalness: 0.1,
      roughness: 0.65,
    });

    const brakeDiscMaterial = new THREE.MeshStandardMaterial({
      color: 0x94a3b8, // Stainless brake rotor
      metalness: 0.95,
      roughness: 0.25,
      side: THREE.DoubleSide,
    });

    const caliperRedMaterial = new THREE.MeshStandardMaterial({
      color: 0xdc2626, // Sport Brembo red caliper
      metalness: 0.5,
      roughness: 0.3,
    });

    const motorHousingMaterial = new THREE.MeshStandardMaterial({
      color: 0x090d16, // Finned high-output EV motor
      metalness: 0.9,
      roughness: 0.25,
    });

    const batteryPackMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a, // High-density lithium battery casing
      metalness: 0.8,
      roughness: 0.25,
      clearcoat: 0.5,
    });

    const headlightGlassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.85,
      opacity: 1,
      transparent: true,
      roughness: 0.1,
      ior: 1.5,
    });

    const ledGlowCyan = new THREE.MeshBasicMaterial({
      color: 0x38bdf8, // Electric blue DRL & display
    });

    const ledGlowGreen = new THREE.MeshBasicMaterial({
      color: 0x10b981, // Battery status LED
    });

    const ledGlowRed = new THREE.MeshBasicMaterial({
      color: 0xef4444, // Taillight LED
    });

    // 7. Master Motorbike Assembly
    const motorbikeGroup = new THREE.Group();
    motorbikeGroup.position.set(0, -0.15, 0);

    // --- A. MAIN MOTORCYCLE CHASSIS / FRAME ---
    const frameGroup = new THREE.Group();

    // Twin Spar Trellis Main Frame Beams
    const leftSpar = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 1.25, 16), darkChassisMaterial);
    leftSpar.rotation.z = -Math.PI / 3.8;
    leftSpar.position.set(0.18, 0.38, 0.14);
    const rightSpar = leftSpar.clone();
    rightSpar.position.z = -0.14;
    frameGroup.add(leftSpar, rightSpar);

    // Lower Engine Cradle Tube
    const leftCradle = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.1, 16), darkChassisMaterial);
    leftCradle.rotation.z = Math.PI / 2.1;
    leftCradle.position.set(-0.05, -0.05, 0.13);
    const rightCradle = leftCradle.clone();
    rightCradle.position.z = -0.13;
    frameGroup.add(leftCradle, rightCradle);

    // Headstock / Steering Stem
    const headstock = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.35, 20), darkChassisMaterial);
    headstock.rotation.z = Math.PI / 8;
    headstock.position.set(0.85, 0.65, 0);
    frameGroup.add(headstock);

    // --- B. SCULPTED MOTORCYCLE BODY / TANK & FAIRINGS ---
    const bodyGroup = new THREE.Group();

    // Main Muscular Tank Section (Houses battery & charging bay)
    const tankGeo = new THREE.BoxGeometry(0.72, 0.38, 0.44);
    const tankMesh = new THREE.Mesh(tankGeo, bodyFairingMaterial);
    tankMesh.position.set(0.32, 0.68, 0);
    tankMesh.rotation.z = -Math.PI / 18;
    tankMesh.scale.set(1, 0.9, 0.9);
    tankMesh.castShadow = true;
    bodyGroup.add(tankMesh);

    // Upper Tank Bevel Cap
    const tankCap = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.02, 16), brushedChromeMaterial);
    tankCap.position.set(0.42, 0.88, 0);
    bodyGroup.add(tankCap);

    // Side Aero Fairings with cooling vents
    const leftFairing = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.34, 0.05), bodyFairingMaterial);
    leftFairing.position.set(0.18, 0.35, 0.22);
    leftFairing.rotation.y = 0.08;
    const rightFairing = leftFairing.clone();
    rightFairing.position.z = -0.22;
    rightFairing.rotation.y = -0.08;
    bodyGroup.add(leftFairing, rightFairing);

    // Aerodynamic Air Duct Inserts
    const leftDuct = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.08, 0.06), darkChassisMaterial);
    leftDuct.position.set(0.22, 0.35, 0.23);
    const rightDuct = leftDuct.clone();
    rightDuct.position.z = -0.23;
    bodyGroup.add(leftDuct, rightDuct);

    // Contoured Two-Seater Motorcycle Saddle
    const seatRider = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.12, 0.34), seatLeatherMaterial);
    seatRider.position.set(-0.16, 0.66, 0);
    seatRider.rotation.z = Math.PI / 25;
    const seatPillion = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.12, 0.28), seatLeatherMaterial);
    seatPillion.position.set(-0.48, 0.74, 0);
    seatPillion.rotation.z = -Math.PI / 25;
    bodyGroup.add(seatRider, seatPillion);

    // Sleek Sport Tail Cowl
    const tailCowl = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.55, 16), bodyFairingMaterial);
    tailCowl.rotation.z = Math.PI / 2.1;
    tailCowl.position.set(-0.76, 0.7, 0);
    bodyGroup.add(tailCowl);

    // Integrated Horizontal LED Taillight
    const tailLight = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.04, 0.18), ledGlowRed);
    tailLight.position.set(-0.96, 0.72, 0);
    bodyGroup.add(tailLight);

    // Rear License Plate Holder / Mudguard Tidy
    const tailTidy = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.02, 0.12), darkChassisMaterial);
    tailTidy.rotation.z = -Math.PI / 4;
    tailTidy.position.set(-0.95, 0.55, 0);
    bodyGroup.add(tailTidy);

    // --- C. FRONT WHEEL & MOTORCYCLE INVERTED SUSPENSION FORK ---
    const frontForkGroup = new THREE.Group();
    frontForkGroup.position.set(0.85, 0.65, 0);
    frontForkGroup.rotation.z = Math.PI / 8; // Rake angle

    // Triple Tree Clamps (Upper & Lower)
    const upperTripleTree = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.04, 0.36), darkChassisMaterial);
    upperTripleTree.position.set(0, 0.18, 0);
    const lowerTripleTree = upperTripleTree.clone();
    lowerTripleTree.position.set(0, -0.05, 0);
    frontForkGroup.add(upperTripleTree, lowerTripleTree);

    // Anodized Gold Inverted Fork Stanchions
    const leftForkStanchion = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.55, 16), goldForkMaterial);
    leftForkStanchion.position.set(0, -0.28, 0.14);
    const rightForkStanchion = leftForkStanchion.clone();
    rightForkStanchion.position.z = -0.14;
    frontForkGroup.add(leftForkStanchion, rightForkStanchion);

    // Lower Fork Sliders (Chrome/Steel)
    const leftForkSlider = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.55, 16), brushedChromeMaterial);
    leftForkSlider.position.set(0, -0.68, 0.14);
    const rightForkSlider = leftForkSlider.clone();
    rightForkSlider.position.z = -0.14;
    frontForkGroup.add(leftForkSlider, rightForkSlider);

    // Front Mudguard / Fender in Electric Blue
    const frontFender = new THREE.Mesh(
      new THREE.CylinderGeometry(0.48, 0.48, 0.18, 24, 1, true, 0, Math.PI / 2),
      bodyFairingMaterial
    );
    frontFender.rotation.z = Math.PI / 1.35;
    frontFender.rotation.x = Math.PI / 2;
    frontFender.position.set(0, -0.7, 0);
    frontForkGroup.add(frontFender);

    // Motorcycle Handlebars (Clip-on Style)
    const handleBarLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.32, 16), darkChassisMaterial);
    handleBarLeft.rotation.x = Math.PI / 2;
    handleBarLeft.rotation.z = -Math.PI / 12;
    handleBarLeft.position.set(-0.02, 0.22, 0.24);
    const handleBarRight = handleBarLeft.clone();
    handleBarRight.position.z = -0.24;
    handleBarRight.rotation.z = Math.PI / 12;
    frontForkGroup.add(handleBarLeft, handleBarRight);

    // Handlebar Grips
    const gripL = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.12, 16), rubberTireMaterial);
    gripL.rotation.x = Math.PI / 2;
    gripL.position.set(-0.02, 0.22, 0.34);
    const gripR = gripL.clone();
    gripR.position.z = -0.34;
    frontForkGroup.add(gripL, gripR);

    // Rearview Mirrors
    const mirrorStemL = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.2, 8), darkChassisMaterial);
    mirrorStemL.rotation.z = -Math.PI / 5;
    mirrorStemL.position.set(0.05, 0.32, 0.28);
    const mirrorHeadL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.05, 0.02), darkChassisMaterial);
    mirrorHeadL.position.set(0.12, 0.4, 0.28);
    const mirrorStemR = mirrorStemL.clone();
    mirrorStemR.position.z = -0.28;
    const mirrorHeadR = mirrorHeadL.clone();
    mirrorHeadR.position.z = -0.28;
    frontForkGroup.add(mirrorStemL, mirrorHeadL, mirrorStemR, mirrorHeadR);

    // Motorcycle Headlight Housing (Aggressive Sportbike Visor)
    const headlightCowl = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.28, 16), bodyFairingMaterial);
    headlightCowl.rotation.z = -Math.PI / 2;
    headlightCowl.position.set(0.18, 0.12, 0);
    frontForkGroup.add(headlightCowl);

    // Twin LED Projector Headlights
    const headlightLens = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.04, 20), headlightGlassMaterial);
    headlightLens.rotation.z = Math.PI / 2;
    headlightLens.position.set(0.3, 0.12, 0);
    const headlightGlow = new THREE.Mesh(new THREE.CircleGeometry(0.07, 20), ledGlowCyan);
    headlightGlow.rotation.y = Math.PI / 2;
    headlightGlow.position.set(0.31, 0.12, 0);
    frontForkGroup.add(headlightLens, headlightGlow);

    // Digital TFT Dashboard Speedometer
    const dashBox = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.04, 0.16), darkChassisMaterial);
    dashBox.rotation.x = Math.PI / 6;
    dashBox.position.set(-0.06, 0.26, 0);
    const dashScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 0.13), ledGlowCyan);
    dashScreen.rotation.x = -Math.PI / 3;
    dashScreen.position.set(-0.06, 0.28, 0);
    frontForkGroup.add(dashBox, dashScreen);

    frameGroup.add(frontForkGroup);

    // --- D. MOTORCYCLE WHEELS (WIDE TIRES & ALLOY RIMS) ---
    const buildMotorcycleWheel = (isRear: boolean) => {
      const wheelGroup = new THREE.Group();

      // Wide Motorcycle Tire Profile
      const tireWidth = isRear ? 0.18 : 0.14;
      const tireRadius = 0.46;
      const tireGeo = new THREE.TorusGeometry(tireRadius, tireWidth / 2 + 0.04, 24, 40);
      const tireMesh = new THREE.Mesh(tireGeo, rubberTireMaterial);
      tireMesh.castShadow = true;
      wheelGroup.add(tireMesh);

      // Star-Spoke Alloy Rim
      const rimGeo = new THREE.CylinderGeometry(tireRadius - 0.04, tireRadius - 0.04, tireWidth - 0.02, 32, 1, true);
      rimGeo.rotateX(Math.PI / 2);
      const rimMesh = new THREE.Mesh(rimGeo, darkChassisMaterial);
      wheelGroup.add(rimMesh);

      // 5-Spoke Alloy Rim Pattern
      const spokeCount = 5;
      for (let s = 0; s < spokeCount; s++) {
        const ang = (s / spokeCount) * Math.PI * 2;
        const spoke = new THREE.Mesh(
          new THREE.BoxGeometry(0.04, tireRadius - 0.06, 0.03),
          brushedChromeMaterial
        );
        spoke.position.set(Math.cos(ang) * (tireRadius / 2), Math.sin(ang) * (tireRadius / 2), 0);
        spoke.rotation.z = ang;
        wheelGroup.add(spoke);
      }

      // Wheel Axle Hub
      const axleHub = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, tireWidth + 0.04, 20), brushedChromeMaterial);
      axleHub.rotation.x = Math.PI / 2;
      wheelGroup.add(axleHub);

      // Large Drilled Disc Brake Rotors (Twin on front, single on rear)
      const rotorGeo = new THREE.RingGeometry(0.14, 0.26, 32);
      const rotorLeft = new THREE.Mesh(rotorGeo, brakeDiscMaterial);
      rotorLeft.position.z = isRear ? -0.1 : 0.09;
      wheelGroup.add(rotorLeft);

      if (!isRear) {
        const rotorRight = new THREE.Mesh(rotorGeo, brakeDiscMaterial);
        rotorRight.position.z = -0.09;
        wheelGroup.add(rotorRight);
      }

      // Sport Calipers (Brembo Red)
      const caliper = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.12, 0.05), caliperRedMaterial);
      caliper.position.set(0.18, 0.15, isRear ? -0.1 : 0.09);
      caliper.rotation.z = Math.PI / 4;
      wheelGroup.add(caliper);

      return wheelGroup;
    };

    // Front Wheel Assembly
    const frontWheelGroup = buildMotorcycleWheel(false);
    frontWheelGroup.position.set(1.15, -0.32, 0);
    motorbikeGroup.add(frontWheelGroup);

    // Rear Swingarm & Mono-Shock Suspension
    const swingarm = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.08, 0.22), darkChassisMaterial);
    swingarm.position.set(-0.52, -0.08, 0);
    swingarm.rotation.z = -Math.PI / 24;
    frameGroup.add(swingarm);

    // Rear Central Mono-Shock Absorber (Yellow/Gold Spring)
    const shockSpring = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 0.35, 16),
      goldForkMaterial
    );
    shockSpring.rotation.z = Math.PI / 3.2;
    shockSpring.position.set(-0.25, 0.15, 0);
    frameGroup.add(shockSpring);

    // Rear Wheel Assembly
    const rearWheelGroup = buildMotorcycleWheel(true);
    rearWheelGroup.position.set(-0.95, -0.32, 0);
    motorbikeGroup.add(rearWheelGroup);

    // --- E. HIGH-VOLTAGE ELECTRIC POWERTRAIN CORE ---
    // Central 72V Lithium-Ion EV Battery Enclosure
    const batteryGroup = new THREE.Group();
    const batteryCasing = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.44, 0.36), batteryPackMaterial);
    batteryCasing.position.set(0.15, 0.25, 0);
    batteryCasing.castShadow = true;
    batteryGroup.add(batteryCasing);

    // Battery Aluminum Cooling Heat Sink Fins
    for (let f = 0; f < 6; f++) {
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.015, 0.38), brushedChromeMaterial);
      fin.position.set(0.15, 0.1 + f * 0.06, 0);
      batteryGroup.add(fin);
    }

    // Battery Level Green LED Indicator Array
    for (let l = 0; l < 5; l++) {
      const led = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.012, 0.01), ledGlowGreen);
      led.position.set(0.35, 0.38 - l * 0.04, 0.185);
      batteryGroup.add(led);
    }

    // High Voltage Warning Icon Plate
    const hvPlate = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.01), caliperRedMaterial);
    hvPlate.position.set(0.15, 0.32, 0.185);
    batteryGroup.add(hvPlate);

    frameGroup.add(batteryGroup);

    // High Torque Electric Motor Assembly (Mid-Drive / Direct Drive Unit)
    const motorGroup = new THREE.Group();
    const motorHousing = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.32, 24), motorHousingMaterial);
    motorHousing.rotation.x = Math.PI / 2;
    motorHousing.position.set(-0.12, -0.08, 0);
    motorGroup.add(motorHousing);

    // Motor Radial Heat Sinks
    for (let m = 0; m < 10; m++) {
      const ang = (m / 10) * Math.PI * 2;
      const mFin = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.015, 0.32), brushedChromeMaterial);
      mFin.position.set(-0.12 + Math.cos(ang) * 0.16, -0.08 + Math.sin(ang) * 0.16, 0);
      mFin.rotation.z = ang;
      motorGroup.add(mFin);
    }

    // High Current Power Cables (Orange EV conduits)
    const evCableMat = new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.5 }); // High-voltage EV orange
    const cable1 = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.38, 12), evCableMat);
    cable1.rotation.z = Math.PI / 4;
    cable1.position.set(0.02, 0.04, 0.14);
    motorGroup.add(cable1);

    frameGroup.add(motorGroup);

    // Motorcycle Footpegs (Rider & Pillion)
    const pegLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.18, 12), brushedChromeMaterial);
    pegLeft.rotation.x = Math.PI / 2;
    pegLeft.position.set(-0.08, -0.18, 0.24);
    const pegRight = pegLeft.clone();
    pegRight.position.z = -0.24;
    frameGroup.add(pegLeft, pegRight);

    // Kickstand
    const kickstand = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.45, 12), darkChassisMaterial);
    kickstand.rotation.z = -Math.PI / 5;
    kickstand.position.set(-0.1, -0.42, 0.2);
    frameGroup.add(kickstand);

    motorbikeGroup.add(frameGroup);
    motorbikeGroup.add(bodyGroup);

    scene.add(motorbikeGroup);

    // Pre-warm shaders
    renderer.compile(scene, camera);
    setLoading(false);

    sceneRef.current = {
      scene,
      camera,
      renderer,
      bikeGroup: motorbikeGroup,
      motorMesh: motorGroup,
      batteryMesh: batteryGroup,
      cockpitMesh: frontForkGroup,
      frontWheelGroup,
      rearWheelGroup,
      targetRotationY: 0.35,
      targetRotationX: 0,
      targetCamZ: 4.3,
      targetCamY: 1.1,
      targetCamX: 0,
      currentCamZ: 4.3,
      currentCamY: 1.1,
      currentCamX: 0,
    };

    // 8. Mouse / Pointer Interaction for Parallax
    const handlePointerMove = (e: MouseEvent) => {
      if (!sceneRef.current) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      // Subtle parallax response
      sceneRef.current.targetRotationY = 0.35 + x * 0.45;
      sceneRef.current.targetRotationX = y * 0.2;
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      if (sceneRef.current) {
        sceneRef.current.targetRotationX = 0;
      }
    };

    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // 9. Resize Observer
    const handleResize = () => {
      if (!container || !sceneRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 10. Smooth Render Loop (Clock + Exponential Damping)
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const s = sceneRef.current;
      if (!s) return;

      // Idle rotation when not hovering
      if (isRotating && !isHovered && activeView === 'full') {
        s.bikeGroup.rotation.y += delta * 0.32;
      } else {
        s.bikeGroup.rotation.y = THREE.MathUtils.damp(
          s.bikeGroup.rotation.y,
          s.targetRotationY,
          4,
          delta
        );
      }

      s.bikeGroup.rotation.x = THREE.MathUtils.damp(
        s.bikeGroup.rotation.x,
        s.targetRotationX,
        4,
        delta
      );

      // Wheels rotation when in idle animation
      if (isRotating) {
        s.frontWheelGroup.rotation.z -= delta * 1.8;
        s.rearWheelGroup.rotation.z -= delta * 1.8;
      }

      // Smooth camera interpolation for view modes
      s.currentCamZ = THREE.MathUtils.damp(s.currentCamZ, s.targetCamZ, 5, delta);
      s.currentCamY = THREE.MathUtils.damp(s.currentCamY, s.targetCamY, 5, delta);
      s.currentCamX = THREE.MathUtils.damp(s.currentCamX, s.targetCamX, 5, delta);

      s.camera.position.z = s.currentCamZ;
      s.camera.position.y = s.currentCamY;
      s.camera.position.x = s.currentCamX;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
      shadowTexture.dispose();
      scene.clear();
    };
  }, []);

  // Handle View Transitions
  const handleViewChange = (view: ComponentView) => {
    setActiveView(view);
    const s = sceneRef.current;
    if (!s) return;

    if (view === 'full') {
      s.targetCamZ = 4.3;
      s.targetCamY = 1.1;
      s.targetCamX = 0;
      s.targetRotationY = 0.35;
      s.bikeGroup.position.set(0, -0.15, 0);
    } else if (view === 'motor') {
      // Focus on mid-drive high-torque EV motor
      s.targetCamZ = 2.4;
      s.targetCamY = 0.5;
      s.targetCamX = -0.2;
      s.targetRotationY = -Math.PI / 2.3;
      s.bikeGroup.position.set(0.3, 0.1, 0);
    } else if (view === 'battery') {
      // Focus on 72V lithium battery pack
      s.targetCamZ = 2.5;
      s.targetCamY = 0.8;
      s.targetCamX = 0.1;
      s.targetRotationY = 0.45;
      s.bikeGroup.position.set(-0.2, 0, 0);
    } else if (view === 'cockpit') {
      // Focus on front inverted forks, LED headlights, and digital dash
      s.targetCamZ = 2.5;
      s.targetCamY = 1.1;
      s.targetCamX = 0.5;
      s.targetRotationY = Math.PI / 3.5;
      s.bikeGroup.position.set(-0.6, -0.2, 0);
    }
  };

  return (
    <div className="relative w-full h-[480px] lg:h-[580px] rounded-3xl bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-200/50 border border-slate-200/80 shadow-xl overflow-hidden group">
      {/* Loading state indicator */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-20">
          <div className="flex flex-col items-center gap-3">
            <div className="w-9 h-9 border-3 border-sky-600 border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Rendering 3D Electric Motorbike...
            </span>
          </div>
        </div>
      )}

      {/* Top Spec Badges */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-xs pointer-events-auto">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-xs font-bold text-slate-800 tracking-wide">
            Aziz Electronics • 3D Electric Motorbike
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-xs pointer-events-auto">
          <Zap className="w-3.5 h-3.5 text-sky-600" />
          <span className="text-xs font-semibold text-slate-700">
            72V EV Motor &amp; Inverted Suspension
          </span>
        </div>
      </div>

      {/* 3D WebGL Canvas Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Sleek Bottom Control Dock */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-[92%] max-w-[560px]">
        <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-2 shadow-lg flex items-center justify-between gap-1.5">
          {/* Component Inspection Buttons */}
          <div className="flex items-center gap-1 overflow-x-auto py-0.5">
            <button
              onClick={() => handleViewChange('full')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeView === 'full'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              Full Motorbike
            </button>

            <button
              onClick={() => handleViewChange('motor')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeView === 'motor'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              EV Motor
            </button>

            <button
              onClick={() => handleViewChange('battery')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeView === 'battery'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              72V Battery
            </button>

            <button
              onClick={() => handleViewChange('cockpit')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeView === 'cockpit'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Forks &amp; Dash
            </button>
          </div>

          {/* Rotation Toggle */}
          <button
            onClick={() => setIsRotating(!isRotating)}
            title={isRotating ? 'Pause Rotation' : 'Resume Rotation'}
            className={`p-2 rounded-xl text-xs font-medium border transition-colors shrink-0 ${
              isRotating
                ? 'bg-slate-100 text-sky-700 border-slate-200'
                : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          </button>
        </div>
      </div>

      {/* Interaction Hint */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[11px] font-medium text-slate-600 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-slate-200 shadow-xs">
          Move cursor to inspect motorbike angles
        </span>
      </div>
    </div>
  );
};
