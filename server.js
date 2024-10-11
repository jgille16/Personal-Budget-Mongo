const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const app = express();
const port = 3000;
const fs = require('fs');
const budgetModel = require("./models/budget_schema");
let url = 'mongodb://localhost:27017/mongo_budget';

mongoose.connect(url)
        .then(()=>{
            console.log("connected")});


app.use(cors());
app.use(express.json());

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.use('/', express.static('public'))


// *********Final solution********** //
// app.get('/budget', (req, res) => {
//     const budget = JSON.parse(fs.readFileSync('budget.json', 'utf-8'));
//     res.json(budget);
// });


app.get('/budget', async (req, res) => {
    const budget = await budgetModel.find();
    res.json({ myBudget: budget });
});

app.post('/budget', async (req, res) => {
    const { data, backgroundColor, labels } = req.body;
    const newBudget = new budgetModel({ data, backgroundColor, labels });
    const savedBudget = await newBudget.save();
    res.status(201).json(savedBudget);
    
});



app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
});