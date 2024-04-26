const express = require('express');

const app = express();

app.use(express.json());

app.post((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.post('/api/book', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'votre requête a bien été envoyé !'
  });
});


app.get('/api/book', (req, res, next) => {
  res.status(200).json({ message: 'Votre requête a bien été reçue !' }); 
});

module.exports = app;
