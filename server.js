const http = require(`http`);

const server = http.createServer((req, res) => {
  console.log(req);
  let body = ``;

  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    console.log(body);
  });

  res.end(`Cool`);
})

server.listen(8081, `127.0.0.1`);
