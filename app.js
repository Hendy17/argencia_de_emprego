const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/connection');
const Job = require('./models/Job');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const app = express();
const PORT = 3535;

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// DB connection
db.authenticate()
  .then(() => {
    console.log("Conectou ao banco de dados com sucesso");
    // Sincronize o modelo com o banco de dados
    return Job.sync();
  })
  .catch(err => {
    console.error("Ocorreu um erro ao conectar ao banco de dados:", err);
    process.exit(1); // Encerra o processo em caso de falha na conexão com o banco de dados
  });

// Routes
app.get('/', async (req, res) => {
  let search = req.query.job;
  let query = '%' + search + '%';

  try {
    let jobs;
    if (!search) {
      jobs = await Job.findAll({
        order: [['createdAt', 'DESC']]
      });
    } else {
      jobs = await Job.findAll({
        where: { title: { [Op.like]: query } },
        order: [['createdAt', 'DESC']]
      });
    }
   
    res.render('index', { jobs, search });
  } catch (err) {
    console.error("Ocorreu um erro ao buscar os jobs:", err);
    res.status(500).send('Erro no servidor');
  }
});

// Jobs routes
app.use('/jobs', require('./routes/jobs'));

app.listen(PORT, () => {
  console.log(`O Express está rodando na porta ${PORT}`);
});

module.exports = app;
