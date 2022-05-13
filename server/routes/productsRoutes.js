const productsRoutes = require('express' ).Router()
const productsContollers = require('../controllers/productsController')
const { loginAuth } = require('../middleware/loginMiddleware')

productsRoutes.get('/products', loginAuth, productsContollers.getAllProducts)
productsRoutes.post('/products', loginAuth, productsContollers.postProducts)
productsRoutes.put('/products/:productId', loginAuth, productsContollers.updateProduct)
productsRoutes.delete('/products/:productId', loginAuth, productsContollers.deleteProducts)

module.exports = productsRoutes