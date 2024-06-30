const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/connectio'); 
const Job = require('./models/Job');
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
    console.error("Ocorreu um erro ao conectar:", err);
  });

// Routes
app.get('/', (req, res) => {
  Job.findAll({
    order: [
      ['createdAt', 'DESC']
    ]
  })
  .then(jobs => {
    res.render('index', {
      jobs
    });
  })
  .catch(err => console.error(err));
});

// Jobs routes
app.use('/jobs', require('./routes/jobs'));

app.listen(PORT, () => {
  console.log(`O Express está rodando na porta ${PORT}`);
});

module.exports = app;
