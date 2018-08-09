var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://onkar:Onkar-007@ds117422.mlab.com:17422/todoapp' || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = { mongoose };