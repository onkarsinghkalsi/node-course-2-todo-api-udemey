//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');       //Identical to above line--ES6 object destruction
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Todos');

    //Delete Many
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    //Delete one
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    //Find and delete one
    // db.collection('Todos').findOneAndDelete({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    //Find and delete one with object id
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b60043343b2528d973cdbe6')
    }).then((result) => {
        console.log(result);
    });

    //client.close();
});