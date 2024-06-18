

# Sistema de Clínica Médica

Este é um sistema de gestão de clínica médica desenvolvido utilizando Node.js, Express.js e Sequelize ORM.

## Pré-requisitos

Certifique-se de ter o Node.js e o MySQL instalados em sua máquina local.

- Node.js: [Instalação do Node.js](https://nodejs.org/)
- MySQL: [Instalação do MySQL](https://dev.mysql.com/downloads/)

## Configuração do Projeto

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/clinica-medica.git
   ```

2. Instale as dependências do projeto:

   ```bash
   cd clinica-medica
   npm install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=nome_do_banco
   DB_HOST=localhost
   PORT=3000
   ```

   Substitua `seu_usuario`, `sua_senha`, `nome_do_banco` pelos seus dados de conexão ao MySQL.

## Sequelize CLI

Utilizamos o Sequelize CLI para gerenciar migrações e seeders.

### Criar o Banco de Dados

```bash
npx sequelize-cli db:create
```

### Executar Migrações

```bash
npx sequelize-cli db:migrate
```

### Executar Seeders

```bash
npx sequelize-cli db:seed:all
```

## Executar o Projeto

Para iniciar o servidor, execute o seguinte comando:

```bash
npm start
```

O servidor estará acessível em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

- `config/`: Configurações do Sequelize.
- `controllers/`: Controladores da aplicação.
- `models/`: Definições dos modelos do Sequelize.
- `routes/`: Rotas da API.
- `seeders/`: Seeders para popular o banco de dados.
- `index.js`: Ponto de entrada da aplicação.

## Endpoints da API

### Consultas

- `GET /api/consultas`: Listar todas as consultas.
- `GET /api/consultas/:id`: Obter detalhes de uma consulta.
- `POST /api/consultas`: Criar uma nova consulta.
- `PUT /api/consultas/:id`: Atualizar uma consulta existente.
- `DELETE /api/consultas/:id`: Excluir uma consulta.

### Pacientes

- `GET /api/pacientes`: Listar todos os pacientes.
- `GET /api/pacientes/:id`: Obter detalhes de um paciente.
- `POST /api/pacientes`: Criar um novo paciente.
- `PUT /api/pacientes/:id`: Atualizar um paciente existente.
- `DELETE /api/pacientes/:id`: Excluir um paciente.

### Médicos

- `GET /api/medicos`: Listar todos os médicos.
- `GET /api/medicos/:id`: Obter detalhes de um médico.
- `POST /api/medicos`: Criar um novo médico.
- `PUT /api/medicos/:id`: Atualizar um médico existente.
- `DELETE /api/medicos/:id`: Excluir um médico.

