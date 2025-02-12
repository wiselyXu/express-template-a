const  express = require('express')

const app = express()

const PORT = process.env.port || 3000

// 
app.use('/api',router)

app.use(errorHandler())

app.listen(PORT,() =>{
    console.log(`Server is runing at http://localhost:${PORT}`)
})


