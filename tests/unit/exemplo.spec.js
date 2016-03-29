describe('Starting 3D',function(){
	var scene;

	beforeEach(function(){
		scene = new THREE.Scene();
	});

	it('should return null',function(){
		expect(scene.fog).toBeNull();
	});

	it('should return true',function(){
		expect(scene.autoUpdate).toBe(true);
	});

});
