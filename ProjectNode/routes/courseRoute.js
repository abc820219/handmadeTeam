const express = require('express');//引入express應用程式
const router = express.Router();
const mysql = require('mysql');
const bluebird = require('bluebird');
const db_Obj = require('C:/Users/__connect.json'); //連線到資料庫
const db = mysql.createConnection(db_Obj);
bluebird.promisifyAll(db);



router.get("/:storeId?", (req, res) => {
    const storeId = req.params.storeId;
    const total = "SELECT * FROM ((((`store` NATURAL JOIN `course`) NATURAL JOIN `course_img`) NATURAL JOIN `course_ind`) LEFT JOIN `community` ON `store`.`store_sid` =`community`.`correspond_sid`) WHERE `store`.`store_sid` = " + storeId ;


    // 暫時篩選店家標號是課程的 之後要改回tank的
    db.queryAsync(total)
        .then(results => {
            res.json(results);
            console.log(results)
        })
        .catch((error) => {
            console.log("courseRouter出錯了")
        });
})


module.exports = router;