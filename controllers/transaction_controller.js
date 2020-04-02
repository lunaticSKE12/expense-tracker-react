const Transaction = require('../models/Transaction')

// @desc Get all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find()

    return res.status(200).json({
      success: true,
      count: transactions.length,
      dataa: transactions
    })
  } catch{
    return res.send(500).json({
      success: false,
      error: 'Server ERROR'
    })
  }
}

// @desc Add transactions
// @route POST /api/v1/transactions
// @access Public
exports.addTransactions = async (req, res, next) => {
  res.send('POST Transactions')
}

// @desc Delete transactions
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransactions = async (req, res, next) => {
  res.send('DELETE Transactions')
}