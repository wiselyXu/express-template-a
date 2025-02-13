const express = require('express')

const router = express.Router();

router.get('/sayhi',(req,res,next) =>{
    console.log('in demo path sayhi');
    res.send('say hi, when you see this, the service is OK')
})
.get('/',(req,res,next) =>{
    console.log('in demo path');
    res.send(' when you see this, the service is OK')
})

module.exports = router