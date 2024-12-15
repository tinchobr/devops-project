require('dotenv').config();
const Sentry = require("./instrument.js");
const express = require('express');
const jwt = require('jsonwebtoken');
const crypto = require("crypto");
const app = express();

app.use(express.json());

let users = []; 

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;

//#region endpoints
// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username != ADMIN_USERNAME) {
    return res.status(401).json({ message: "Invalid username" });
  }

  if (encryptPassword(password) != ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Invalid password" });
  }

  let token = jwt.sign(
    {
      username,
    },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json({ token });
});

const encryptPassword = (password) => {
  const hash = crypto.createHash("sha256");
  hash.update(password.toString());
  return hash.digest("hex");
};

const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ message: "Access denied" });

  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) return res.status(401).json({ message: "Invalid Token" });
    next();
  });
};

// Create a new user
app.post('/users', verifyToken, (req, res) => {
  const { name, email } = req.body;
  const id = users.length + 1;
  const user = { id, name, email };
  users.push(user);
  res.status(201).json(user);
});

// Read all users
app.get('/users', verifyToken, (req, res) => {
  res.status(200).json(users);
});

// Get a user by ID
app.get('/users/:id', verifyToken, (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id == id);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json(user);
});

// Update a user
app.put('/users/:id', verifyToken, (req, res) => {
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
app.delete('/users/:id', verifyToken, (req, res) => {
  const { id } = req.params;
  users = users.filter(u => u.id != id);
  res.status(204).send();
});
//#endregion

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

Sentry.setupExpressErrorHandler(app);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
