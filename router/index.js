const {Router} = require('express')
const v1 = Router()

const  userRoute = require('./user')

v1.get('/',(req, res) => {
    res.status(200).json({message:'v1 route is working...'})
})

v1.use('/user',userRoute)

module.exports = v1