const express = require('express')
const app = express()
const path = require('path')
const { User, syncAndSeed } = require('./db')

syncAndSeed()

app.use('/dist',express.static(path.join(__dirname, 'dist')))

app.get('/',(req,res,next)=> {
  res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/api/users',(req, res, next)=> {
  User.findAll({})
    .then(users => res.send(users))
})

app.get('/api/users/:id',(req, res, next) => {
  User.findById(req.params.id)
    .then(user => res.send(user))
})

app.post('/api/users/create',(req,res,next)=> {
  User.create(req.body)
    .then(user => res.send(user))
})

app.delete('/api/users/:id',(req,res,next)=> {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(user => res.send(user))
})

// app.put('/api/users/:id',(req, res, next) => {
//   User.findById(req.params.id)
//     .then(user => user.update({
//       name: req.body.name,
//       managerId: req.body.user.id
//     }))
// })

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`listening on port: ${port}`))
