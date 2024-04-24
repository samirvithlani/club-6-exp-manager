const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({

    name:{
        type: String,
    },
    description:{
        type: String,
    },
    amount:{
        type: Number,
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    status:{
        type: Boolean,
        default: true
    }

})

module.exports = mongoose.model('Expense', expenseSchema);