# CoinKeepr 💰

**CoinKeepr** é uma API RESTful desenvolvida com Node.js, Express e PostgreSQL para controle de finanças pessoais. O projeto permite gerenciar transações financeiras, categorias e oferece um resumo do saldo, facilitando o controle de entradas e saídas.

---

## 🔧 Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL
- Knex.js
- JWT (autenticação)
- Bcrypt.js (criptografia de senhas)
- Joi (validação de dados)
- Dotenv (variáveis de ambiente)
- CORS

---

## 📦 Funcionalidades

- Cadastro e login de usuários
- Autenticação via token JWT
- Criação, edição e remoção de categorias
- CRUD completo de transações (entrada e saída)
- Filtros por tipo, data e categoria
- Resumo financeiro do usuário (entradas, saídas e saldo total)
- Middleware de autenticação
- Validação completa de dados com Joi

---

## 🚀 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/joaowatanabe/coinkeepr.git

# Acesse a pasta do projeto
cd coinkeepr

# Instale as dependências
npm install
```

### 📄 Crie o arquivo `.env` com as seguintes variáveis:

```env
PORT=3000
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=coinkeepr
JWT_SECRET=sua_chave_secreta
```

### ⚙️ Execute as migrações do banco:

```bash
npx knex migrate:latest
```

### ▶️ Inicie o servidor:

```bash
npm run dev
```

---

## 🌐 Deploy

- API hospedada em: _em breve_
- Banco hospedado em: _em breve_

---

## 📌 Status do Projeto

🚧 Em desenvolvimento — funcionalidades backend em progresso.

---

## ✨ Autor

João Vicente Watanabe  
[🔗 GitHub](https://github.com/joaowatanabe)  
[🔗 LinkedIn](https://www.linkedin.com/in/joaowatanabe)
