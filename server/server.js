var express = require('express');
var bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    //console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((docs) => {
        res.send(docs);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(400).send(e);
    });

});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    //res.send(req.params);
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => res.status(400).send());
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => res.status(400).send());
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = { app };












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