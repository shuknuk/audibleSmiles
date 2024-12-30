(function() {
  // Grab the canvas element
  const canvas = document.getElementById('three-canvas');

  // Create a Three.js renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Create a new Three.js scene
  const scene = new THREE.Scene();

  // Create a camera
  const camera = new THREE.PerspectiveCamera(
    75, // field of view
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // near clipping plane
    1000  // far clipping plane
  );
  camera.position.z = 5;

  // Add a basic ambient light so we can see the cube
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  // Create a directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 10, 7.5);
  scene.add(directionalLight);

  // Create a simple box geometry and a basic material, then combine them into a mesh
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: 0x00ffaa });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Listen for window resize events
  window.addEventListener('resize', onWindowResize, false);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // Scroll event listener
  window.addEventListener('scroll', onScroll, false);
  function onScroll() {
    // Use scroll position to subtly affect the rotation speed
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScroll;
    
    // Rotate the cube proportionally to the scroll fraction
    cube.rotation.x = scrollFraction * Math.PI * 2; // up to 2x full rotation
    cube.rotation.y = scrollFraction * Math.PI * 2;
  }

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();
})(); 