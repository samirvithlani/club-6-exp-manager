const router = require('express').Router();
const expenseController = require('../controller/ExpenseController');

router.post('/expense', expenseController.createExpense);
router.get('/expense', expenseController.getExpenses);
router.get("/expense/:id", expenseController.getExpenseById);
router.put("/expense/:id", expenseController.updateExpense);
router.put("/softDeleteExpense/:id", expenseController.softDeleteExpense);
module.exports = router;