const express = require('express');
const router = express.Router();
const Job = require('./moduls/job.js');

// Rota para renderizar o formulário de adição de jobs
router.get('/add', (req, res) => {
  res.render('add');
});

// Rota para processar a adição de um novo job
router.post('/add', (req, res) => {
  let { title, description, salary, company, email, new_job } = req.body;

  // Inserir o novo job no banco de dados
  Job.create({
    title,
    description,
    salary,
    company,
    email,
    new_job: new_job ? true : false,
  })
  .then(() => res.redirect('/'))
  .catch(err => console.log(err));
});

module.exports = router;
