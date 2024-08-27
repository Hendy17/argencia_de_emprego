const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Job list
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.render('jobs', { jobs });
  } catch (err) {
    console.error("Ocorreu um erro ao buscar os jobs:", err);
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;
