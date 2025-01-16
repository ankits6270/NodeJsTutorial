const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks');

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// Sample API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'This is an API response!' });
});

app.use('/api/v1/tasks',tasks);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
