const express = require('express');
const router = express.Router();
const { signUp, login } = require('../services/authService');

router.post('/signup', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await signUp(fullName, email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await login(email, password);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;