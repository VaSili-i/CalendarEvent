const { Router } = require('express');
let userRouter = new Router();
let checkUser = require('../middleware/checkUser')
let userController = require('../controller/userController')

userRouter.post('/registration', userController.registration);
userRouter.post('/login', userController.login);
userRouter.get('/check', checkUser, userController.check);
userRouter.get('/all', userController.getAllUser);


module.exports = userRouter