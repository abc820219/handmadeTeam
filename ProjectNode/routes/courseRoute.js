const express = require('express');//引入express應用程式
const router = express.Router();
const mysql = require('mysql');
const bluebird = require('bluebird');
const db_Obj = require('C:/Users/__connect.json'); //連線到資料庫
const db = mysql.createConnection(db_Obj);
bluebird.promisifyAll(db);

router.get('/',(req,res)=>{
    res.send("course");
});
router.get("/:storeId",(req,res)=>{
    const storeId = req.params.storeId;
    const output =[];
    db.queryAsync("SELECT * FROM (`course` LEFT JOIN `course_ind` ON `course`.`store_sid` = `course_ind`.`store_sid`)LEFT JOIN `course_img` on `course`.`course_sid` = `course_img`.`course_sid` =" + storeId)
    .then(results=>{
        
        output.push(results[0]);
        res.json(output);
    })
    .catch((error)=>{
        console.log("courseRouter出錯了")
    });
})

module.exports = router;