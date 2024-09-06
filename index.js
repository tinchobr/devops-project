const express = require('express');
const app = express();
app.use(express.json());

let users = [];  // Arreglo en memoria para almacenar usuarios

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Create a new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const id = users.length + 1;
  const user = { id, name, email };
  users.push(user);
  res.status(201).json(user);
});

// Read all users
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// Update a user
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = users.find(u => u.id == id);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  user.name = name;
  user.email = email;
  res.status(200).json(user);
});

// Delete a user
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(u => u.id != id);
  res.status(204).send();
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app
