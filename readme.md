# Demo para o FrontPress

![Logo do projeto FrontPress](https://cloud.githubusercontent.com/assets/4563634/19937877/0fb7df52-a10a-11e6-944d-0bb641ef2976.png)

> Demo Single Page Application using FrontPress as a library :tada:

[Esse site](http://jotateles.com.br/demo-frontpress/#!/) é uma demonstração de uso do [projeto FrontPress](https://www.github.com/frontpressorg/frontpress) como biblioteca js importável.

## Que API é consumida nesse site?

Nesse site para finalidade de demonstração está sendo consumida uma lista de posts vinda da [Revista Viva Decora](https://www.vivadecora.com.br/revista), que é um blog WordPress com **RestApi versão 2**.

## Importação do código do FrontPress

Também para finalidade de demonstração o FrontPress foi importado através do [cdn do rawgit](https://rawgit.com/frontpressorg/frontpress/master/release/frontpress.min.js).
Essa utilização através do cdn não é recomendável e aparece aqui apenas para facilitar testes rápidos de alterações do FrontPress.

Outros usuários interessados em utilizar o FrontPress como biblioteca js devem optar pelo comando:

```shell
npm install frontpress --save
``` 

## Injeção do FrontPress como dependência e `load` do projeto 

Após importado o script do FrontPress o passo seguinte é importar o módulo `frontpress` no módulo da nossa ng-app. Assim:

``` javascript
angular.module("demo-frontpress-app", ["frontpress"]);
angular.module("demo-frontpress-app").config(DemoFrontPressConfig);

function DemoFrontPressConfig($FrontPressProvider){
	$FrontPressProvider.configure.load(); // carrega o FrontPress
}
``` 

## Configurando o FrontPress

O FrontPress possui várias configurações. O exemplo a seguir, extraído do site, mostra uma constante angular de configuração do FrontPress.


``` javascript
angular.module("frontpress.components.frontpress-provider")
.constant("FrontPressConfigurationFile", {
    "restApiUrl": "https://www.vivadecora.com.br/revista/wp-json",
    "apiVersion": "v2",
    "pageSize": 5,
    "infiniteScroll": true,
    "routes": {
        "post": "/:postYear/:postMonth/:postDay/:postId",
        "home.pagination": "/pagina/:pageNumber"
    },
    "titles": {
        "post": ":postTitle - :siteName",
        "home": ":siteName - Bem Vindo"
    },
    "overrides": {
        "siteName": "FrontPress Viva Decora Demo SPA"
    }
});
``` 
[[extraído desse arquivo](http://jotateles.com.br/demo-frontpress/js/frontpress-config.constant.js)]

Esse arquivo foi inserido ali também para finalidade de facilitar testes.
Existe uma [issue no FrontPress para possibilitar que essas configurações sejam feitas diretamente através do $FrontPressProvider](https://github.com/frontpressorg/frontpress/issues/97).

Futuramente deve haver também a possibilidade de utilizar o [FrontPress CLI](https://github.com/frontpressorg/frontpress-cli) para criar essa configuração através de um prompt interativo.



