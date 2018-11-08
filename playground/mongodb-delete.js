const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server.');
    const db = client.db('TodoApp');


    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then(({result}) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });
    // deleteOne
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    //findOneAndDelete

    db.collection('Users').deleteMany({name: "Padi"});
    
    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID("5be2a954fff6912370120bde")
    // }).then((results) => {
    //     console.log(JSON.stringify(results, undefined, 2))
    // });

    // client.close();
});