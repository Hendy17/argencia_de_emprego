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

// Rota para mostrar o formulário de adição de job (adicionando ou editando)
router.get('/add/:id?', async (req, res) => {
  try {
    let job = null;

    if (req.params.id) {
      job = await Job.findOne({ where: { id: req.params.id } });
    }

    res.render('add', { job });
  } catch (err) {
    console.error("Erro ao carregar o formulário de job:", err);
    res.status(500).send('Erro no servidor');
  }
});

// Rota para visualizar os detalhes de um job específico
// Rota para visualizar os detalhes de um job específico
router.get('/view/:id', async (req, res) => {
  try {
    const job = await Job.findOne({ where: { id: req.params.id } });

    if (job) {
      res.render('view', { job });
    } else {
      res.status(404).send('Job não encontrado');
    }
  } catch (err) {
    console.error("Erro ao buscar o job:", err);
    res.status(500).send('Erro no servidor');
  }
});


// Rota para adicionar ou atualizar um job
router.post('/add', async (req, res) => {
  const { id, title, description, salary, company, email, new_job } = req.body;

  try {
    if (id) {
      // Atualiza um job existente
      await Job.update({
        title,
        description,
        salary,
        company,
        email,
        new_job: new_job ? true : false
      }, {
        where: { id }
      });
    } else {
      // Adiciona um novo job
      await Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job: new_job ? true : false
      });
    }
    
    res.redirect('/');
  } catch (err) {
    console.error("Erro ao adicionar/atualizar o job:", err);
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;
