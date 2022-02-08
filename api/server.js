// BUILD YOUR SERVER HERE
const express = require('express')

const server = express()
// build an endpoint to test if app is working
server.use('*', (req, res) => {
    res.status(404).json({
        message:'not found'
    })
})
module.exports = server; // EXPORT YOUR SERVER instead of {}
