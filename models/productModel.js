// import connection
import db from "../config/database.js";

export const getProducts = (result) => {
    db.query("SELECT * FROM PRODUCT", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getProductById = (id,result) =>{
    var  quesryString = "SELECT * FROM PRODUCT WHERE PRO_NUM = '"+ id + "'";
    console.log(quesryString);
    db.query("SELECT * FROM PRODUCT WHERE PRO_NUM = ?", [id], (err, results)=>{        
        if(err) {
            console.log(err);
            result(err, null);
        } else {            
            result(null, results[0]);
        }
    })
}

export const updateProductById = (data, id, result) => {
    db.query("UPDATE PRODUCT SET PRO_NAME = ?, PRICE= ? WHERE PRO_NUM = ?", [data.product_name, data.product_price, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Insert Product to Database
export const insertProduct = (data, result) => {
    db.query("INSERT INTO PRODUCT SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Product to Database
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM product WHERE product_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}