const http = require("http");

const handleAllRequest = (requestObject, responseObject) => {
  console.log("all request");

  const url = requestObject.url;
  if (url === "/") {
    responseObject.end("Welcome to my home page");
    return;
  }else if (url === "/about") {
    responseObject.end("Welcome to my about page");
    return;
  }else if (url === "/contact") {
    responseObject.end("Welcome to my contact page");
    return;
  }else {
    responseObject.end("404 page not found");
    return;
  }
};

const server = http.createServer(handleAllRequest);
  
server.listen(3000, "127.0.0.1", () => {
  console.log("server is running on port 3000");
});
