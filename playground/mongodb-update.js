//const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5b4cad0a655c85e38089a456")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result)
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b4bc96a78d92a0facddd782")
  }, {
    $inc: {
      age: 1
    },
    $set: {
      name: 'Hugo'
    }
  },{
    returnOriginal: false
  }).then((result)=>{
    console.log(result)
  })

  //db.close()
});
