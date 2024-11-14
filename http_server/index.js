// index.js
const server = require("./server");

const port = 3000;
server.listen(port, "127.0.0.1", () => {
  console.log(`App running on port ${port}...`);
});
