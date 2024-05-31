const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json()); //middleware


//router require

const categoryRoutes = require('./src/routes/CategoryRoutes');
const expenseRoutes = require('./src/routes/ExpenseRoutes');
const userRoutes = require('./src/routes/UserRoutes');

//use routes

app.use("/category", categoryRoutes);
app.use("/expense", expenseRoutes);
app.use("/user", userRoutes);

//localhost:3000/category/






mongoose.connect("mongodb://127.0.0.1:27017/club-6-expense").then((data)=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err)
})


///server
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})