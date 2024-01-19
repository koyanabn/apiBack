const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Sample data to serve
const data = [
  { id: 1, name: 'user1' },
  { id: 2, name: 'user2' },
];
app.use(cors());
// Define a route to fetch data
app.get('/api/data', (req, res) => {
  res.json(data);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

