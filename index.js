const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dbOperate = require('./operations')

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {
    
    //perform checks to see if value is null. If it is not null, that means there's an error.
    assert.equal(err, null);


    console.log('Connected correctly to server');

    const db = client.db(dbname);

    dbOperate.insertDocument(db, { name: "Vadonut", description: "Test"}, 'dishes', (result) => {
        
        console.log('inserted Document:\n ', result.ops);

        dbOperate.findDocuments(db, 'dishes', (docs) => {
            console.log('Found Documents:\n', docs);
        
            dbOperate.updateDocument(db, {name: "Vadonut"}, {description : "Updated Test"}, 'dishes', (result) => {
                console.log('Updated Documents:\n', result.result);

                dbOperate.findDocuments(db, 'dishes', (docs) => {
                    console.log('Found Documents:\n', docs);

                    db.dropCollection('dishes', (result) => {
                        console.log("Dropped collection: ", result);

                        client.close();
                    });
                })
            
            })
        
        })


    })

});

