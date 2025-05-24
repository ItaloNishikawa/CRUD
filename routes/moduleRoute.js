const routerClientes = require("./clienteRoute.js")
const routerProdutos = require("./produtoRoute.js")

module.exports = (app) => {
    app.use(routerClientes),
    app.use(routerProdutos)

}