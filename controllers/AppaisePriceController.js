// Import function from Product Model
//import { getProducts, getProductById, insertProduct, updateProductById, deleteProductById } from "../models/productModel.js";
import { getAppaisePrice,insertAppaisePrice } from "../models/AppaisePriceModel.js";

export const showAppaisePrice = (req, res) => {
    getAppaisePrice((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New Product
export const createAppaisePrice = (req, res) => {
    const data = req.body;
    insertAppaisePrice(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

