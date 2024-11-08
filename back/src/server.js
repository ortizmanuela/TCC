const app = require('./app'); // Importa o app.js já configurado
 

const port = process.env.PORT || 3100;
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
 
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "API de Tarefas",
            version: "1.0.0",
            descipition: "API CRUD para gerenciar tarefas",
        },
        servers: [{ url: "http://localhost:3100"}],
    },
    apis: [`${__dirname}/routes/*.js`],
};
 
 
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`);
});