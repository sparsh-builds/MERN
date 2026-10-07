const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Sparsh!');
});








// Middleware to parse JSON bodies
app.use(express.json());

// Basic Routing Examples

// Handle GET requests
app.get('/get-example', (req, res) => {
  res.send('This is a GET request');
});

// Handle POST requests
app.post('/post-example', (req, res) => {
  res.send('This is a POST request');
});

// Handle PUT requests
app.put('/put-example', (req, res) => {
  res.send('This is a PUT request');
});

// Handle DELETE requests
app.delete('/delete-example', (req, res) => {
  res.send('This is a DELETE request');
});

// Handle all HTTP methods
app.all('/all-example', (req, res) => {
  res.send(`This handles all HTTP methods: ${req.method}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});