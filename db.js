const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:FSzAE8q87LSd2faf@cluster0.uof1tyg.mongodb.net/')


const TodoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('Todos', TodoSchema);

module.exports = ({
    todo: todo
})