var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    //console.log(req.body);
    var todo =new Todo({
        text: req.body.text
    });

    todo.save().then((docs) =>{
        res.send(docs);
    }, (e)=>{
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});



































//Todo----

// var newTodo = new Todo({
//     text: 'Eat garlic bread',
//     completed: false,
//     completedAt: 1200
// });

// newTodo.save().then((docs) => {
//     console.log('Saved Todo', docs);
// }, (e) => {
//     console.log('Unable to save Todo');
// });

//User ---

// var newUser = new User({
//     email: 'onkar@gmail.com'
// });

// newUser.save().then((docs) => {
//     console.log('User saved', docs);
// }, (e) => {
//     console.log('Unable to save User', e);
// });