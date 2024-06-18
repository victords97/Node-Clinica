const express = require('express');
const { sequelize } = require('./models');
const pacienteRoutes = require('./routes/pacienteRoutes');
const medicoRoutes = require('./routes/medicoRoutes');
const consultaRoutes = require('./routes/consultaRoutes');

const app = express();


// Middleware para processar dados JSON
app.use(express.json());



const PORT = process.env.PORT;

app.use(express.json());
app.use('/api', pacienteRoutes);
app.use('/api', medicoRoutes);
app.use('/api', consultaRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
    // Sincroniza os modelos com o banco de dados (opcional)
    sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
