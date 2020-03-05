const http = require('http');

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello</title>
</head>
<body>
  <h1>Hello</h1>
  <p>${process.env.HOSTNAME}</p>
</body>
</html>
  `.trim());
  res.end();
}).listen(PORT);
