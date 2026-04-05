const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0", // Versão do Swagger
    info: {
      title: "The Ignis API",
      description: "API para catálogo de dragões de Game of Thrones",
      version: "1.0.0",
      contact: {
        name: "Ana Flávia",
      },
      servers: [{ url: "http://localhost:4000" }],
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT", // ou outro formato dependendo do token usado
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js", "./docs/swaggerDocs.yaml"], // Caminho para os arquivos onde você documenta as rotas
};

export default swaggerOptions;