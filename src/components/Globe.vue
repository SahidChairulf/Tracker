<template>
  <div ref="container" class="flex inset-y-0 right-0 w-screen">
    <canvas class="webgl"></canvas>
    <div class=" absolute w-full lg:ml-12 lg:w-1/2 md:w-1/2 top-1/2 left-0 transform -translate-y-1/2">
      <div class="title text-[#FAF1E4] dark:text-gray-200 px-4 md:px-8">
        <h1 class="text-sm md:text-2xl lg:text-3xl uppercase font-semibold">Get well soon dear Earth</h1>
        <p class="text-justify text-sm lg:text-base md:text-base w-auto font-normal text-[#FAF1E4] my-2 md:my-4">
          If you can't keep clean your old bedroom you will also destroy the new one. Don't look for an
          alternative of earth. Rather keep it clean and habitable. Environment pollution has increased
          significantly. By polluting the environment we are not just destroying the earth, we are destroying
          humanity as well.
        </p>
        <RouterLink to="/maps">
        <button class="btn bg-[#9EB384] hover:bg-green-600 text-[#FAF1E4] font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-110">Let's Clean</button>
      </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  mounted() {
    let scene;
    let camera;
    let renderer;
    const canvas = this.$el.querySelector('.webgl');

    // Initialize scene, camera, and renderer
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);

    // Initialize OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Load Earth textures
    const earthTexture = new THREE.TextureLoader().load('https://cdn.discordapp.com/attachments/1134376125821374504/1159740511935017040/earthmap1k.jpg');
    const bumpMap = new THREE.TextureLoader().load('https://cdn.discordapp.com/attachments/1134376125821374504/1156950337777848330/earthbump.jpg');
    const cloudTexture = new THREE.TextureLoader().load('https://cdn.discordapp.com/attachments/1134376125821374504/1156939478259204166/earthCloud.png');

    // Create Earth material
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
      bumpMap: bumpMap,
      bumpScale: 0.3,
      roughness: 0.5, // Adjust the roughness for a realistic look
      metalness: 0.5, // Adjust the metalness for a realistic look
    });

    // Create Earth geometry and mesh
    const earthGeometry = new THREE.SphereGeometry(0.6, 64, 64);
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);

    // Create cloud material
    const cloudMaterial = new THREE.MeshStandardMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.7,
    });

    // Create cloud geometry and mesh
    const cloudGeometry = new THREE.SphereGeometry(0.63, 32, 32);
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(cloudMesh);

    // Load galaxy texture
    const galaxyTexture = new THREE.TextureLoader().load('https://cdn.discordapp.com/attachments/1134376125821374504/1156950538999566408/galaxy.png');

    // Create galaxy material
    const galaxyMaterial = new THREE.MeshBasicMaterial({
      map: galaxyTexture,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.3,
    });

    // Create galaxy geometry and mesh
    const starGeometry = new THREE.SphereGeometry(80, 64, 64);
    const starMesh = new THREE.Mesh(starGeometry, galaxyMaterial);
    scene.add(starMesh);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 30);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    // Add point light helper
    const lightHelper = new THREE.PointLightHelper(pointLight);
    scene.add(lightHelper);

    // Handle window resizing
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderScene();
    }, false);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      starMesh.rotation.y -= 0.002;
      earthMesh.rotation.y -= 0.0015;
      cloudMesh.rotation.y -= 0.001;
      controls.update();
      this.renderScene();
    };

    // Render the scene
    this.renderScene = () => {
      renderer.render(scene, camera);
    };

    animate();
  },
};
</script>