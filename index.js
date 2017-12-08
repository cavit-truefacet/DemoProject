const express = require('express')
const app = express()
const os = require('os')

var ts = Date.now()
var thc = Date.now()
const dt = Math.random() * 600 + 300
var healthy = dt < 600

app.get('/', (req, res, next) => {
    let t = (Date.now() - ts) / 1000
    res.setHeader("Content-Type", 'text/plain'); //Solution!
    res.writeHead(200);
    res.end([
        'Hello visitor, I have been working for ' + t + ' seconds!',
        'Host: '+ os.hostname(),
        'Healthy: ' + (healthy ? 'yes' : 'NO')
    ].join('\n'))
})

app.get('/health', (req, res) => {
    let t = (Date.now() - thc) / 1000
    if(t > dt){
        thc = Date.now()
        healthy = !healthy
    }
    res.writeHead( healthy ? '200' : '500')
    res.end()
})

app.listen(process.env.PORT||80, () => console.log('app is running on ' + (process.env.PORT||80)))
