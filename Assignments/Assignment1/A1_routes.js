const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Homepage</title></head>");
    res.write("<body><h1>Welcome to my homepage</h1></body>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write("<html>");
    res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      console.log(`The parsed data is ${chunk}`);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);

      res.statusCode = 302;
      res.setHeader("Location", "/users");
      res.end();
    });
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<body><h1>List of users</h1></body>");
    res.write('<ul style="list-style-type:disc;">');
    res.write("<li>User1</li>");
    res.write("<li>User2</li>");
    res.write("<li>User3</li>");
    res.write("<li>User4</li>");
    res.write("</ul>");
    res.end();
  }
};

module.exports = requestHandler;
