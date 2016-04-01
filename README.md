# Jasmine

É um framework de BDD (Behaviour-Driven Development) para testar código em JavaScript. Ele não depende de outro framework JavaScript.
Possui sintaxe limpa, óbiva para que você possa facilmente escrever testes.

Instalando/Configurando o Jasmine

Adicionando o arquivo package.json

```
  $ npm init
```

Adicionando o plugin do Jasmine como dependência em ambiente de desenvolvimento no arquivo package.json

```
  $ npm install jasmine-core --save-dev
```   

Estrutura de um arquivo de teste simples

```
describe ('Suíte de Testes', function(){
  it('deve retornar true', function(){
    expect(true).toBe(true);
  });

  it('deve retonar false', function(){
    expect(false).toBe(false);
  });
});
```

E como executar seus testes? Karma

Servidor para rodar os testes, que possui fácil integração com Jasmine, Mocha e Qunit, e foi desenvolvido pela equipe do angular.

Instalando/Configurando o Karma

```
  $ npm install -g karma-cli

  $ npm install karma --save-dev

  $ karma init karma.conf.js
```   

Executando seus testes

```
  $ karma start karma.conf.js
```  
