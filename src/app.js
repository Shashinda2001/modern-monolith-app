const express = require('express');
const app = express();

app.use(express.json());

// Healthcheck endpoint (Essential for production monitoring)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Sample API route
app.get('/api/v1/products', (req, res) => {
  res.status(200).json({
    data: [
      { id: 1, name: 'Cloud Server Tier 1', price: 0 },
      { id: 2, name: 'Database Add-on', price: 15 }
    ]
  });
});

module.exports = app;