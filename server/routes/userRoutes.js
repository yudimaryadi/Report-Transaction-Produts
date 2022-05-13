const userRoutes = require('express').Router()
const userControllers = require('../controllers/userController')


userRoutes.post('/login', userControllers.handleLogin)
userRoutes.post('/register', userControllers.handleRegister)


module.exports = userRoutes