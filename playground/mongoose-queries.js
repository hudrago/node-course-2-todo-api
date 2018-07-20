const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// var id = '5b51d4556470bae407a4e02f111'
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos', todos)
// })
//
// Todo.findOne({
//   _id: id
// }).then((todos)=>{
//   console.log('Todo', todos)
// })

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('ID not found')
//   }
//   console.log('Todo by ID', todo)
// }).catch((e)=>console.log(e))

var id = '5b4e09d30e45d59021d61633'

User.findById(id).then((user)=>{
  if(!user){
    return console.log('Unable to find user')
  }
  console.log(JSON.stringify(user, undefined, 2))
}).catch((e)=>console.log(e))
