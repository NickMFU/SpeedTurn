// import express
import express from "express";

// import function from controller
//import { showProducts, showProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.js";
import { showProducts, showProductById , updateProduct, createProduct, deleteProduct} from "../controllers/productController.js";
import {  showAppaisePrice,createAppaisePrice} from "../controllers/AppaisePriceController.js";


// init express router
const router = express.Router();

// Get All Product
router.get('/products', showProducts);

router.get('/productEdit/:id',showProductById); 
router.put('/productEdit/:id', updateProduct);

router.post('/productCreate', createProduct);
//router.delete('/products/:id', deleteProduct);
router.get('/AppaisePrice', showAppaisePrice);
router.post('/AppaisePriceCreate', createAppaisePrice);

// export default router
export default router;