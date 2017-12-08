const http = require('http')

var starttime = Date.now()
const server = http.createServer((req, res, next)=>{
    let t = (Date.now() - starttime) / 1000
    res.end('Hello visitor, I have been here for ' + t + ' seconds!')
})

server.listen(80, err => {
    if(err){
        return console.log(err)
    }
    console.log('http://localhost')
})
