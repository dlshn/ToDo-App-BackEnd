const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo');
require('dotenv').config();
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get('/get',(req,res) =>{
    TodoModel.find()  /* all records get */
    .then(result=> res.json(result))
    .catch(err=> res.json(err))
});

app.put('/update/:id',(req,res) =>{
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result=> res.json(result))
    .catch(err=> res.json(err))
})

app.delete('/delete/:id',(req,res)=>{
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id: id})
    .then(result=> res.json(result))
    .catch(err=> res.json(err))
})

app.post('/add',(req,res) =>{
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result=> res.json(result))
    .catch(err=> res.json(err))
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});