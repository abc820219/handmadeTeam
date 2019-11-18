const express = require('express');//引入express應用程式
const router = express.Router();
const mysql = require('mysql');
const bluebird = require('bluebird');
const db_Obj = require('C:/Users/__connect.json'); //連線到資料庫
const db = mysql.createConnection(db_Obj);
bluebird.promisifyAll(db);



router.get("/:storeId?", (req, res) => {
    const storeId = req.params.storeId;
  
    const output = [];
    const total = "SELECT * FROM ((((`store` NATURAL JOIN `course`) NATURAL JOIN `course_img`) NATURAL JOIN `course_ind`) LEFT JOIN `community` ON `store`.`store_sid` =`community`.`correspond_sid`) WHERE `store`.`store_sid` = " + storeId ;
    const course_kid_cake =  total+" AND `course`.course_kid LIKE '%蛋糕%'"
    const course_kid_dessert =  total+" AND `course`.course_kid LIKE '%點心%'"
    const course_kid_cookie =  total+" AND `course`.course_kid LIKE '%餅乾%'"

    // 暫時篩選店家標號是課程的 之後要改回tank的
    db.queryAsync(total)
        .then(results => {
            // output.push(results);
            // console.log(output);
            res.json(results);
     
        })
        // }).then(results=>{
        //     output.push(results);
        //     console.log(output);
        //     return  db.queryAsync(course_kid_dessert)
        // }).then(results=>{
        //     output.push(results);
        //     console.log(output);
        //     return  db.queryAsync(course_kid_cookie)
        // }).then(results => {
        //     output.push(results);
        //     console.log(output);
        //     res.json(output);
        // })
        .catch((error) => {
            console.log("courseRouter出錯了")
        });
})


module.exports = router;