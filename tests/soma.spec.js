describe('Soma dois números', function(){
  it('deve somar dois números positivos', function(){
    expect(soma(1,3)).toEqual(4);
  });

  it('deve somar dois números iguais', function(){
    expect(soma(1,1)).toEqual(2);
  });
});
