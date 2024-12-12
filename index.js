const jsonServer = require("json-server"); 
const server = jsonServer.create();
const router = jsonServer.router("adjudicaciones_v2.json");
const middlewares = jsonServer.defaults(); 
const port = process.env.PORT || 361; 

server.use(middlewares); 
server.use(router);

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
