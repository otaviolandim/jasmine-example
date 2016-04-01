Jasmine

É um framework de BDD (Behaviour-Driven Development) para testar código em JavaScript. Ele não depende de outro framework JavaScript.
Possui sintaxe limpa, óbiva para que você possa facilmente escrever testes.

Instalando/Configurando o Jasmine

Adicionando o arquivo package.json
<code>$ npm init</code>

Adicionando o plugin do Jasmine como dependência em ambiente de desenvolvimento no arquivo package.json
<code>$ npm install jasmine-core --save-dev</code>

Estrutura de um arquivo de teste simples
<code>
describe ('Suíte de Testes', function(){
  it('deve retornar true', function(){
    expect(true).toBe(true);
  });

  it('deve retonar false', function(){
    expect(false).toBe(false);
  });
});
</code>

E como executar seus testes? <code>Karma</code>
Servidor para rodar os testes, que possui fácil integração com Jasmine, Mocha e Qunit, e foi desenvolvido pela equipe do angular.

Instalando/Configurando o Karma
<code>$ npm install -g karma-cli</code>
<code>$ npm install karma --save-dev</code>
<code>$ karma init karma.conf.js</code>

Executando seus testes
<code>$ karma start karma.conf.js</code>
