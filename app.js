const  express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./router')


const app = express()



const PORT = process.env.port || 3000

// support Cross original     支持跨域
app.use(cors())
// enalbe http request log
app.use(morgan('dev'))
app.use(express.json())  // 接收 json格式的请求参数
app.use(express.urlencoded())  //接收url encoded的参数

app.use('/api/v1',router); // 初始url都要以 /api/v1/开头， 供后面升级留究竟

// 404 : url not found show
 // 404 的处理
 app.use((req,res,next) =>{
    res.status(404).send('404 not found')
 })
// 程序中有出错的处理，4个参数
 app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).send('service error')
 });

//app.use(errorHandler())

app.listen(PORT,() =>{
    
    console.log(`Server is runing at http://localhost:${PORT} `)
    console.log(`you can check this http://localhost:${PORT}/api/v1/demo/ to verify\n`)
    console.log('CORS-enabled for all request: cofigure more cors, \n'
        + 'please refer  : https://expressjs.com/en/resources/middleware/cors.html ')

    console.log('initially , the url should start with /api/v1/, you can config it in app.js file')
})


