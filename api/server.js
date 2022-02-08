// BUILD YOUR SERVER HERE
const express = require('express')
const User = require('./users/model')


const server = express()
// [POST] /api/users



// [GET] /api/users
// can get all the users and can get all the correct users

server.get('/api/users', (req, res) => {
  User.find()
    .then(users => {
        res.json(users)
    })
    .catch( err => {
        res.status(500).json({
            message: 'error getting users',
            err: err.message,
            stack: err.stack,
        })
    })
})

// [GET] /api/users/:id

// server.get('/api/users/:id', (req, res) => {
//     User.findById(req.params.id)
//       .then(users => {
//        console.log(user)
//       })
//       .catch( err => {
//           res.status(500).json({
//               message: 'error getting users',
//               err: err.message,
//               stack: err.stack,
//           })
//       })
//   })


// [DELETE] /api/users/:id
// server.get('/api/users', (req, res) => {
//     User.find()
//       .then(users => {
//           res.json(users)
//       })
//       .catch( err => {
//           res.status(500).json({
//               message: 'error getting users',
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
//               message: 'error getting users',
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
