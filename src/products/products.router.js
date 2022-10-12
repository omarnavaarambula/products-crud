
const router = require('express').Router()

const productsServices = require('./products.services')

router.get('/', productsServices.getProducts)

router.post('/', productsServices.createNew)

router.get('/:id', productsServices.getOneproducts)

router.delete('/:id', productsServices.deleteProduct) 

router.patch('/:id', productsServices.patchProducts) 

module.exports = router