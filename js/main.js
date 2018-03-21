var camera, scene, renderer;

var objects;

init();
animate();

function init() {
	
	camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 3, 10000 );
	camera.position.z = 3200;

	scene = new THREE.Scene();
	
	objects = [];
	
	renderer = new THREE.WebGLRenderer( { antialias: false } );
	renderer.setClearColor( 0x6B42F5  );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	for ( var i = 0; i < 10; i ++ ) {
		let cube = new Cube();
		let mesh = cube.getMesh()

		mesh.position.x = Math.random() * 8000 - 4000;
		mesh.position.y = Math.random() * 8000 - 4000;
		mesh.position.z = Math.random() * 8000 - 4000;
		mesh.rotation.x = Math.random() * 2 * Math.PI;
		mesh.rotation.y = Math.random() * 2 * Math.PI;
		mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 50 + 100;
		
		objects.push( mesh );
		
		scene.add( mesh );
		
	}
}

function animate() {
	requestAnimationFrame( animate );
	render();
}

function render() {
	requestAnimationFrame( render );

	for ( var i = 0, il = objects.length; i < il; i ++) {
		objects[ i ].rotation.x += 0.01;
		objects[ i ].rotation.y += 0.02;
	}
	
	renderer.render(scene, camera);
}

