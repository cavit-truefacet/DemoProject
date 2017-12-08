const express = require('express')
const app = express()
const os = require('os')

var starttime = Date.now()
var healthCheck = Date.now()
var healthy = true

app.get('/', (req, res, next) => {
    let t = (Date.now() - starttime) / 1000
    res.setHeader("Content-Type", 'text/html'); //Solution!
    res.writeHead(200);
    res.end('Hello visitor,<br>I have been here for ' + t + ' seconds!<br>' + os.hostname())
})

app.get('/health', (req, res) => {
    let t = (Date.now() - healthCheck) / 1000
    if(t > 120){
        healthCheck = Date.now()
        healthy = !healthy
    }
    res.writeHead( healthy ? '200' : '500')
    res.end()
})

app.listen(process.env.PORT||80, () => console.log('app is running on ' + (process.env.PORT||80)))
