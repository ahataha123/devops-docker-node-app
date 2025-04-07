const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from your DevOps-powered Node.js app!');
});

// Add your console.log('Hello World!') here
console.log('Hello World!');

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

