const http = require("http");

const routes = require("./A1_routes.js.js");

const server = http.createServer(routes);

server.listen(3000);
