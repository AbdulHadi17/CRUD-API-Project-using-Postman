const express = require('express');
const {addAaProduct,getAllProducts,getAProduct,deleteAProduct,updateAProduct} = require('../controllers/productController.js');



const router = express.Router();


router.post('/', addAaProduct)

router.get('/', getAllProducts)

router.get('/:id', getAProduct)

router.delete('/:id', deleteAProduct)

router.put('/:id', updateAProduct)

module.exports = router;
