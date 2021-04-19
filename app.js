const http = require('http')

const server = http.createServer((req,res)=>{
    res.end('welcome to home page')
    console.log(req,'////',res)


})

server.listen(3000)

// lets see if this work from here directly