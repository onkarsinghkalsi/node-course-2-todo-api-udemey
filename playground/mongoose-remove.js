const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

//Remove all documents and doesn't return anything
// Todo.remove({}).then((result) => {
//     console.log(result);   
// });

//Todo.findOneAndRemove()
//Todo.findByIdandRemove()

Todo.findByIdAndRemove('5b6bf5d372394647fc207063').then((todo) => {
    console.log(todo);
});

Todo.findOneAndRemove({_id: '5b6bf5d372394647fc207063'}).then((todo) => {
    console.log(todo);
});