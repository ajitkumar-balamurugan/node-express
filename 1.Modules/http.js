const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Hello, world</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>About</h1>");
  } else {
    res.end("<h1>Page does not exist</h1><a href='/'>Back</a>");
  }
});

server.listen(3000);

console.log("Server running at http://localhost:3000");
