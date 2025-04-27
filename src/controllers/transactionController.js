const transactionService = require("../services/transactionService");

const createTransaction = async (req, res) => {
  try {
    const { description, amount, type, category_id, date } = req.body;
    const userId = req.user.id;

    if (!description || !amount || !type || !category_id || !date) {
      return res
        .status(400)
        .json({ message: "Todos os campos são obrigatórios" });
    }
    if (type !== "income" && type !== "expense") {
      return res
        .status(400)
        .json({ message: "Tipo inválido. Deve ser income ou expense." });
    }
    if (typeof amount !== "number" || amount <= 0) {
      return res
        .status(400)
        .json({ message: "Valor inválido. Deve ser um número positivo." });
    }
    const transaction = await transactionService.createTransaction({
      description,
      amount,
      type,
      category_id,
      date,
      userId,
    });

    return res.status(201).json(transaction);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao criar transação." });
  }
};

const getTransaction = async (req, res) => {
  try {
    const userId = req.user.id;
    const transactions = await transactionService.getTransactions(userId);
    if (!transactions || transactions.length === 0) {
      return res.status(404).json({ message: "Nenhuma transação encontrada." });
    }

    return res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao listar transações." });
  }
};

const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { description, amount, type, category_id, date } = req.body;
  const userId = req.user.id;

  try {
    if (!description || !amount || !type || !category_id || !date) {
      return res
        .status(400)
        .json({ message: "Todos os campos são obrigatórios" });
    }
    if (type !== "income" && type !== "expense") {
      return res
        .status(400)
        .json({ message: "Tipo inválido. Deve ser income ou expense." });
    }

    if (typeof amount !== "number" || amount <= 0) {
      return res
        .status(400)
        .json({ message: "Valor inválido. Deve ser um número positivo." });
    }

    const transaction = await transactionService.getTransactionById(id, userId);

    if (!transaction) {
      return res.status(404).json({ message: "Transação não encontrada." });
    }

    const updatedTransaction = await transactionService.updateTransaction({
      id,
      description,
      amount,
      type,
      category_id,
      date,
      userId,
    });

    return res.status(200).json(updatedTransaction);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao atualizar transação." });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params; // Pega o id da transação da URL
    const userId = req.user.id; // Pega o userId do token

    // Verificar se a transação existe
    const transaction = await transactionService.getTransactionById(id, userId);

    if (!transaction) {
      return res.status(404).json({ message: "Transação não encontrada." });
    }

    // Deletar a transação
    await transactionService.deleteTransaction(id, userId);

    return res.status(200).json({ message: "Transação deletada com sucesso." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao deletar transação." });
  }
};

module.exports = {
  createTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction,
};
