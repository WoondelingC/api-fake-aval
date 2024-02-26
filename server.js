const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("datos.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 4000;

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1); // Forzar la terminación del proceso
});
