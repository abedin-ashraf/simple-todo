//Write basic express boilerplate code,
//with express.json() middleware


//     title: String,
//     description: String
// }
const express = require('express');
const cors = require('cors');

const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
// body{
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
// app.use(cors(){
//     origin: 'http://localhost:5173/'
// })

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    //Put it in MongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    })

})

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedUpdatePayload = updateTodo.safeParse(updatePayload);
    if (!parsedUpdatePayload.success) {
        res.status(411).json({
            msg: "You sent wrong input"
        })
        return;
    }

    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    });
    res.json({
        msg: "Todo marked as completed"
    })




})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})