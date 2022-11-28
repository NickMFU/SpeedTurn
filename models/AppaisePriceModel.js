// import connection
import db from "../config/database.js";

export const getAppaisePrice = (result) => {
    db.query("SELECT * FROM AppaisePrice", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
// Insert Product to Database
export const insertAppaisePrice = (data, result) => {
    db.query("INSERT INTO AppaisePrice SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   

}