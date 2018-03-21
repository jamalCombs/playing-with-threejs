class Cube {
	constructor () {
		this.type = 'Cube';
		this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
    	this.material = new THREE.MeshBasicMaterial({color: 0xff00ff});
    	this.mesh = new THREE.Mesh( this.geometry, this.material );
	}

	getMesh() {
		return this.mesh;
	}
}
