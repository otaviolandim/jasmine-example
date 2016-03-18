describe('Iniciar o teste com 3d',function(){
	it('Teste 01',function(){
		var scene = new THREE.Scene();
		expect(scene.fog).toBeNull();
	})
});