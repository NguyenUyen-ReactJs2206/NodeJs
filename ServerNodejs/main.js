// RESPONSE: Phan hoi  ---- REQUEST: Yeu cau

const http = require("http");

const PORT = 4000;
//Create Server
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(`{"message":"Hello World"}`);
});

//Handle request from client and send response

//Listening for connections to the server on port 3000
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
