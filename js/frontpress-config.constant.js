angular.module("frontpress.components.frontpress-provider")
.constant("FrontPressConfigurationFile", {
    "restApiUrl": "https://www.vivadecora.com.br/revista/wp-json",
    "apiVersion": "v2",
    "pageSize": 5,
    "infiniteScroll": true,
    "routes": {
        "post": "/:postSlug",
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