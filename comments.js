// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comment array
const comments = [
  { name: 'Taro', comment: 'Hello!'},
  { name: 'Jiro', comment: 'Hi!' },
  { name: 'Saburo', comment: 'Hey!' }
];

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start web server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});