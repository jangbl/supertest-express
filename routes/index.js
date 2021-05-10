const express = require('express');

const router = express.Router();
router.post('/register', (req, res, next) => {
  if (!req.body.firstName) {
    res.status(400).json('you need to pass a firstName');
    return;
  }
  res.sendStatus(201);
});

module.exports = router;
