const express = require('express');
const app = express();

app.use(express.json());

// Root path handler
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Modern Monolith API',
    endpoints: {
      health: '/health',
      products: '/api/v1/products'
    }
  });
});

// Healthcheck endpoint
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