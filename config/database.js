import mysql from "mysql2";

//create database connection
const con = mysql.createConnection({ //cannot change 
  host: "mysql-soranandata.alwaysdata.net",
  user: "290715_nick", //6331501121
  password: "6431503062", //janpim
  database: "soranandata_base"
});

export default con;

//con.connect(function(err) {
  //if (err) throw err;
   //console.log("Connected!");  
//con.end;
 //console.log("end!");  
 //});

