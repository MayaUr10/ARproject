// import * as THREE from './lib/build/three.module.js';
// // import { OrbitControls } from './lib/examples/jsm/controls/OrbitControls.js';

// // Create a scene
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Create a simple cube
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// // AR.js setup (markerless)
// const arToolkitSource = new THREEx.ArToolkitSource({
//   sourceType: 'webcam',
// });

// arToolkitSource.init(() => {
//   setTimeout(() => {
//     onResize();
//   }, 1000);
// });

// window.addEventListener('resize', () => {
//   onResize();
// });

// function onResize() {
//   arToolkitSource.onResize();
//   arToolkitSource.copySizeTo(renderer.domElement);
//   if (arToolkitContext.arController !== null) {
//     arToolkitSource.copySizeTo(arToolkitContext.arController.canvas);
//   }
// }

// const arToolkitContext = new THREEx.ArToolkitContext({
//   cameraParametersUrl: 'lib/aframe/data/camera_para.dat',
//   detectionMode: 'mono',
// });

// arToolkitContext.init(() => {
//   camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
// });

// function animate() {
//   requestAnimationFrame(animate);
//   if (arToolkitSource.ready) {
//     arToolkitContext.update(arToolkitSource.domElement);
//   }
//   renderer.render(scene, camera);
// }

// animate();