const express = require('express');//引入express應用程式
const router = express.Router();
const mysql = require('mysql');
const bluebird = require('bluebird');
const db_Obj = require('C:/Users/__connect.json'); //連線到資料庫
const db = mysql.createConnection(db_Obj);
bluebird.promisifyAll(db);

// router.get('/',(req,res)=>{
//     console.log("123");
//     res.send("course");
// });

router.get("/:storeId?",(req,res)=>{
    console.log("123");
    const storeId = req.params.storeId;
    // console.log(storeId);
    const output =[];
    // 暫時篩選店家標號是課程的 之後要改回tank的
    db.queryAsync("SELECT * FROM ((((`store` NATURAL JOIN `course`) NATURAL JOIN `course_img`) NATURAL JOIN `course_ind`) LEFT JOIN `community` ON `store`.`store_sid` =`community`.`correspond_sid`) WHERE `store`.`store_sid` = "  +  storeId )
    .then(results=>{
  
        res.json(results);

    })
    .catch((error)=>{
        console.log("courseRouter出錯了")
    });
})

module.exports = router;