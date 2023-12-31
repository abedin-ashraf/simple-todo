//Write basic express boilerplate code,
//with express.json() middleware

import { createTodo, updateTodo } from './types';
// body{
//     title: String,
//     description: String
// }
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
})

app.get('/todos', (req, res) => {

})

app.put('/completed', (req, res) => {
    const updatePayload = req.body.id;
    const parsedUpdatePayload = updateTodo.safeParse(updatePayload);
    if (!parsedUpdatePayload.success) {
        res.status(411).json({
            msg: "You sent wrong input"
        })
        return;
    }
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})