const http = require("http");
const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.send("This is Hello page");
});

// const server = http.createServer((req, res) => {
//   if (req.url === "/hello") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("<html><body><h1>Hello</h1></body></html>");
//     res.end();
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404 Not Found");
//   }
// });

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
