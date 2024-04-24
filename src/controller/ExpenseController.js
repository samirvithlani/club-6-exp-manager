const expenseSchema = require('../model/ExpenseModel');

const createExpense = async (req, res) => {

    try{

        const savedExpense = await expenseSchema.create(req.body);
        res.status(201).json({
            message: "Expense created successfully",
            data: savedExpense
        })
    }
    catch(err){

        res.status(500).json({
            message: err.message
        })
    }



}

const getExpenses = async (req, res) => {


    try{

        const expenses =  await expenseSchema.find({status:true}).populate('category');
        if(expenses && expenses.length > 0){
            res.status(200).json({
                message: "Expenses fetched successfully",
                data: expenses
            })
        }
        else{
            res.status(404).json({
                message: "No expenses found"
            })
        }


    }catch(err){

        res.status(500).json({
            message: err.message
        })
    }


}

const deleteExpense = async (req, res) => {


        try{

            const id = req.params.id;
            const deletedExpense = await expenseSchema.findByIdAndDelete(id)
            res.status(200).json({
                message: "Expense deleted successfully",
            })


        }catch(err){
            res.status(500).json({
                message: err.message
            })
        }

}

const updateExpense = async (req, res) => {


    try{
        const id = req.params.id;
        //const expense = req.body;

        const updatedExpense = await expenseSchema.findByIdAndUpdate(id,req.body);
        res.status(200).json({
            message: "Expense updated successfully",
        })


    }

    catch(err){
        res.status(500).json({
            message: err.message
        })
    }


}

const softDeleteExpense = async (req, res) => {


    const id = req.params.id;
    const expense = await expenseSchema.findByIdAndUpdate(id, {status: false});
    res.status(200).json({
        message: "Expense deleted successfully",
    })



}

const getExpenseById = async (req, res) => {

    try{

        const id = req.params.id;
        const expense = await expenseSchema.findById(id).populate('category');
        if(expense){
            res.status(200).json({
                message: "Expense fetched successfully",
                data: expense
            })
        }
        else{
            res.status(404).json({
                message: "No expense found"
            })
        }
        
            

    }catch(err){

        res.status(500).json({
            message: err.message
        })

    }

}

module.exports = {
    createExpense,
    getExpenses,
    deleteExpense,
    updateExpense,
    softDeleteExpense,
    getExpenseById
}