<template>
  <div ref="container" class="flex inset-y-0 right-0 w-screen">
    <canvas class="webgl"></canvas>
    <div class=" absolute sm:w-full lg:w-1/2 md:w-1/2 top-1/2 left-0 transform -translate-y-1/2">
      <div class="title text-[#FAF1E4] dark:text-gray-200 px-4 md:px-8">
        <h1 class="text-xl md:text-2xl lg:text-3xl uppercase font-semibold">Get well soon dear Earth</h1>
        <p class="text-justify font-normal text-[#FAF1E4] my-2 md:my-4">
          If you can't keep clean your old bedroom you will also destroy the new one. Don't look for an
          alternative of earth. Rather keep it clean and habitable. Environment pollution has increased
          significantly. By polluting the environment we are not just destroying the earth, we are destroying
          humanity as well.
        </p>
        <RouterLink to="/maps">
        <button class="btn bg-[#9EB384] text-[#FAF1E4] font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-110">Let's Clean</button>
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
    // global variables
    let scene;
    let camera;
    let renderer;
    const canvas = document.querySelector('.webgl');

    // scene setup
    scene = new THREE.Scene();

    // camera setup
    const fov = 60;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;
    scene.add(camera);

    // renderer setup
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.autoClear = false;
    renderer.setClearColor(0x000000); // Ubah menjadi 0x000000 (hitam gelap)

    // orbit control setup
    const controls = new OrbitControls(camera, renderer.domElement);

    // earth geometry
    const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32);

    // earth material
    const earthMaterial = new THREE.MeshPhongMaterial({
      roughness: 0.5,
      metalness: 0,
      map: new THREE.TextureLoader().load('https://cdn.discordapp.com/attachments/1134376125821374504/1156816892804218901/earthmap1k.jpg?ex=6516592f&is=651507af&hm=3186fd5dd2b381ec3e7439272366f713de6425dc30170cac09df753a20859e1f&'),
      bumpMap: new THREE.TextureLoader().load('https://cdn.discordapp.com/attachments/1134376125821374504/1156950337777848330/earthbump.jpg?ex=6516d577&is=651583f7&hm=5f6707aec2a9a6f4f3abab18fdfd2db3ecdb45533ea1e027a333d9c68310e88a&'),
      bumpScale: 0.3,
    });

    // earth mesh
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);

    // cloud Geometry
    const cloudGeometry = new THREE.SphereGeometry(0.63, 32, 32);

    // cloud material
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('https://cdn.discordapp.com/attachments/1134376125821374504/1156939478259204166/earthCloud.png?ex=6516cb5a&is=651579da&hm=1201b83434d53c3a4a3a0f45dfe202777ba1a39f6bc641574c229ece8e64fd46&'),
      transparent: true,
      opacity: 0.7,
    });

    // cloud mesh
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(cloudMesh);

    // galaxy geometry
    const starGeometry = new THREE.SphereGeometry(80, 64, 64);

    // galaxy material
    const starMaterial = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load('https://cdn.discordapp.com/attachments/1134376125821374504/1156950538999566408/galaxy.png?ex=6516d5a7&is=65158427&hm=ddb1945d9f2a0116436d62a4782ae5088388bc30705fd3378b28a3729ab7f1fa&'),
      side: THREE.BackSide,
    });

    // galaxy mesh
    const starMesh = new THREE.Mesh(starGeometry, starMaterial);
    scene.add(starMesh);

    // ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // point light
    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    // point light helper
    const lightHelper = new THREE.PointLightHelper(pointLight);
    scene.add(lightHelper);

    // handling resizing
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderScene();
    }, false);

    // spinning animation
    const animate = () => {
      requestAnimationFrame(animate);
      starMesh.rotation.y -= 0.002;
      earthMesh.rotation.y -= 0.0015;
      cloudMesh.rotation.y -= 0.001;
      controls.update();
      this.renderScene();
    };

    // rendering
    this.renderScene = () => {
      renderer.render(scene, camera);
    };

    animate();
  },
};
</script>