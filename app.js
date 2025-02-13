const  express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()



const PORT = process.env.port || 3000

// support Cross original     支持跨域
app.use(cors())
// enalbe http request log
app.use(morgan('dev'))
app.use(express.json())  // 接收 json格式的请求参数
app.use(express.urlencoded())  //接收url encoded的参数

app.use('/api',router)

//app.use(errorHandler())

app.listen(PORT,() =>{
    
    console.log(`Server is runing at http://localhost:${PORT} `)
    console.log('CORS-enabled for all request: cofigure more cors, \n'
        + 'please refer  : https://expressjs.com/en/resources/middleware/cors.html ')
})


