//modules
const express = require('express');
const path = require('path');

const htmlRouter = express.Router();

htmlRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

htmlRouter.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, "../public/home.html"));
})

htmlRouter.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
})

module.exports = htmlRouter