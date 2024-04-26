const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://aurelien:JSlJKalWSJcNiewM@atlascluster.hdy3j8v.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.post('/api/books', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'test de livre créé !'
  });
});

app.get('/api/books', (req, res, next) => {
  const books = [
    {
      id: 1,
      title: "Nom du livre"
    }
  ];
  res.status(200).json(books);
});

module.exports = app;
