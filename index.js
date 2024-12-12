const jsonServer = require("json-server"); 
const server = jsonServer.create();
const router = jsonServer.router("test.json"); // Verifica que el archivo esté en la ruta correcta
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 361;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
}).on('error', (err) => {
    console.error("Error occurred while starting the server:", err);
});
