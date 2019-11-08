const todos = [
  {
    id: Math.floor(Math.random() * 10000),
    title: 'Finir la formation',
    completed: false,
  },
  {
    id: Math.floor(Math.random() * 10000),
    title: 'Déjeuner à la cantine',
    completed: true,
  }
];

const express = require('express');

const app = express();

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.listen(3000, () => {
  console.log('Server started');
});
