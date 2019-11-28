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
        res.json(results);
    });
});

router.post('/',(req,res)=>{
    // const bakeSelect = req.body;
    const bakeChose = [];
    sql = "SELECT * FROM `bake` WHERE `bake`.bake_sid = "+req.body.bakeSid;
    db.queryAsync(sql).then(results => {
        bakeChose.push(results[0]);
        // console.log(results[0]);
        sql = "SELECT * FROM `ingredients` WHERE `ingredients`.bake_sid = "+results[0].bake_sid;
        return db.queryAsync(sql);
    }).then(results=>{
        bakeChose.push(results);
        console.log(bakeChose);
        res.json(bakeChose);
    })
});



module.exports = router;