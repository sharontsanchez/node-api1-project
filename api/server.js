// BUILD YOUR SERVER HERE
const express = require('express')
const User = require('./users/model')


const server = express()

// it doesnt know how to parse from request
server.use(express.json())


// create new user 
// [POST] /api/users

server.post('/api/users', (req, res) => {
    const user = req.body;
    if(!user.name || !user.bio){
        res.status(400).json({
            message: 'Please provide name and bio for the user',
        })    
    } else {
      User.insert(user)
        .then(createdUser => {
                res.status(201).json(createdUser)
            })
            .catch(err => {
                res.status(500).json({
                    message: 'error creating user',
                    err: err.message,
                    stack: err.stack,
                })
            })
    }
})


// [GET] /api/users
// can get all the users and can get all the correct users

server.get('/api/users', (req, res) => {
  User.find()
    .then(users => {
        res.json(users)
    })
    .catch( err => {
        res.status(500).json({
            message: 'The users information could not be retrieved',
            err: err.message,
            stack: err.stack,
        })
    })
})

// [GET] /api/users/:id

server.get('/api/users/:id', (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        if (!user) {
            res.status(404).json({
                message: 'The user with the specified ID does not exist'
            })
        }
        res.json(user)
      })
      .catch( err => {
          res.status(500).json({
              message: 'The user information could not be retrieved',
              err: err.message,
              stack: err.stack,
          })
      })
  })


// [DELETE] /api/users/:id
// server.get('/api/users', (req, res) => {
//     User.find()
//       .then(users => {
//           res.json(users)
//       })
//       .catch( err => {
//           res.status(500).json({
//               message: 'The user could not be removed',
//               err: err.message,
//               stack: err.stack,
//           })
//       })
//   })
// [PUT] /api/users/:id

// server.get('/api/users', (req, res) => {
//     User.find()
//       .then(users => {
//           res.json(users)
//       })
//       .catch( err => {
//           res.status(500).json({
//               message: 'The user information could not be modified',
//               err: err.message,
//               stack: err.stack,
//           })
//       })
//   })


// build an endpoint to test if app is working
server.use('*', (req, res) => {
    res.status(404).json({
        message:'not found'
    })
})
module.exports = server; // EXPORT YOUR SERVER instead of {}
