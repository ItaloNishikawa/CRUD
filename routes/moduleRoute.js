const routerClientes = require("./clienteRoute.js")
module.exports = (app) => {
    app.use(routerClientes)

}