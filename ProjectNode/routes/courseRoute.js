const express = require('express');//引入express應用程式
const router = express.Router();
const mysql = require('mysql');
const bluebird = require('bluebird');
const db_Obj = require('C:/Users/__connect.json'); //連線到資料庫
const db = mysql.createConnection(db_Obj);
bluebird.promisifyAll(db);



router.get("/:storeId", (req, res) => {
    const storeId = req.params.storeId;
    const total = "SELECT * FROM ((((`store` NATURAL JOIN `course`) NATURAL JOIN `course_img`) NATURAL JOIN `course_ind`) LEFT JOIN `community` ON `store`.`store_sid` =`community`.`correspond_sid`) WHERE `store`.`store_sid` = " + storeId;

    db.queryAsync(total)
        .then(results => {
            res.json(results);
            console.log(results)
        })
        .catch((error) => {
            console.log("courseRouter出錯了")
        });
})

router.get("/:storeId/:courseSid", (req, res) => {
    let output = [];
    const storeId = req.params.storeId;
    const courseSid = req.params.courseSid;
    const total = "SELECT * FROM((((`course` NATURAL JOIN `store`) NATURAL JOIN `course_img`) NATURAL JOIN `course_ind`) NATURAL JOIN `course_order`) WHERE `store_sid` = " + storeId + " AND `course_sid`= " + courseSid;
    // const total = "SELECT * FROM((((`course` NATURAL JOIN `store`) NATURAL JOIN `course_img`) NATURAL JOIN `course_ind`) NATURAL JOIN `course_order`) WHERE  `course_sid`= " + courseSid ;
    const total2 = "SELECT * FROM(((`course` NATURAL JOIN `store`) NATURAL JOIN `course_img`) NATURAL JOIN `course_ind`)WHERE `store`.`store_sid` = " + storeId
    db.queryAsync(total)
        .then(results => {
            output.push(results)
            // res.json(results);
            // console.log(results)
            return db.queryAsync(total2)
        }).then(results => {
            output.push(results)
            res.json(output)
        })
        .catch((error) => {
            console.log("courseRouter出錯了")
        });
})



module.exports = router;