        const express = require('express');//引入express應用程式
const router = express.Router();
const mysql = require('mysql');
const db_Obj = require('C:/Users/__connect.json'); //連線到資料庫
const db = mysql.createConnection(db_Obj);
const bluebird = require("bluebird"); //使用兩次sql
bluebird.promisifyAll(db);

router.get('/',(req,res)=>{
    sql = "SELECT * FROM `bake` WHERE 1";
    db.queryAsync(sql).then(results => {
        console.log(results);
        res.json(results);
    });
});



module.exports = router;