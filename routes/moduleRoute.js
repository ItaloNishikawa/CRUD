const routerAlunos = require("./alunoRoutes.js");
const routerProfessores = require("./professorRoutes.js");
const routerDisciplinas = require("./disciplinaRoutes.js");

module.exports = (app) => {
    app.use(routerAlunos);
    app.use(routerProfessores);
    app.use(routerDisciplinas);
};