// lib/swagger.js
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Next.js Swagger API",
    version: "1.0.0",
    description: "A simple API documentation with Swagger",
  },
  servers: [
    {
      url: "http://localhost:3000/api", // Cambia esta URL según sea necesario
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./pages/api/**/*.ts"], // Especifica la ubicación de tus archivos de API
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
