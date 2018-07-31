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

    //Find and Update Todos
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b5ff1197bef2f1cbcb0f1d1')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    //Find and update Users and increment age
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b60046e43b2528d973cdc00')
    }, {
        $inc: {
            age: -1
        },
        $set: {
                name: 'Gaurav Jassi'
            }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

    //client.close();
});