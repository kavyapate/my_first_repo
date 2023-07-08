const {Router} = require('express');
const userRoute = Router()

const userController = require('../controller/user')

userRoute.get('/',(req,res) => {
    res.status(200).json({message:'user route is working...'})
})

 userRoute.post('/add',userController.add)

module.exports = userRoute