define(function(THREE){
    describe('Testes - Contexto 3D', function(){
      it('Teste 01', function(){
        var scene = new THREE.Scene();
        expect(scene.fog).toBeNull();
      });
    });
});
