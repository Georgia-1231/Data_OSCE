const fs = require('fs');
const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 361;

server.use(middlewares);

// Manejar datos grandes en streaming
server.get('/data', (req, res) => {
    const readStream = fs.createReadStream('test.json');
    readStream.pipe(res);
});

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
