const express = require('express')
const app = express()
const { User, syncAndSeed } = require('./db')

syncAndSeed()

app.get('/',(req, res, next)=> {
  User.findAll({
    include: [
      {
        model: User,
        as: 'manager'
      }
    ]
  })
    .then(users => res.send(users))
})

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`listening on port: ${port}`))
