-- Criação da tabela de usuários
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criação da tabela de categorias
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  type VARCHAR(10) CHECK (type IN ('income', 'expense')) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE -- NULL = categoria padrão
);

-- Criação da tabela de transações
CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id),
  description TEXT,
  amount NUMERIC(10, 2) NOT NULL,
  type VARCHAR(10) CHECK (type IN ('income', 'expense')) NOT NULL,
  date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserção de categorias padrão
INSERT INTO categories (name, type) VALUES
('Salário', 'income'),
('Freelance', 'income'),
('Investimentos', 'income'),
('Alimentação', 'expense'),
('Transporte', 'expense'),
('Moradia', 'expense'),
('Educação', 'expense'),
('Lazer', 'expense'),
('Saúde', 'expense'),
('Outros', 'expense');
