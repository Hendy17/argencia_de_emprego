const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Rota para listar jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.findAll({ order: [['createdAt', 'DESC']] });
    res.render('index', { jobs });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no servidor');
  }
});

// Rota para mostrar o formulário de adição de job
router.get('/add', (req, res) => {
  res.render('add'); // Renderiza a view add.handlebars
});

// Detale da vaga 
router.get('/view/:id', (req, res) => Job.findOne({
  where:{id: req.params.id}
}).then(job => {
  res.render('view', {
    job
  });
})
),

// Rota para adicionar um job
router.post('/add', async (req, res) => {
  const { title, description, salary, company, email, new_job } = req.body;
  try {
    await Job.create({
      title,
      description,
      salary,
      company,
      email,
      new_job: new_job ? true : false
    });
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;
