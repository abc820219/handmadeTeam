const express = require("express"); //引入express應用程式
const router = express.Router();
const mysql = require("mysql");
const db_Obj = require("C:/Users/__connect.json"); //連線到資料庫
const db = mysql.createConnection(db_Obj);
const bluebird = require("bluebird"); //使用bluebird讓non-blocking變成promise
bluebird.promisifyAll(db); //db為mysql連線物件

// router.get('/',(req,res)=>{
//     res.send("teacher-Page");
// });

// 某一筆老師資料
// http://localhost:5000/handmade/teacher/3 
// router.get("/:sid", (req, res) => {
//   const teacherId = req.params.sid;
//   const data = []; //  放接到的資料
//   db.queryAsync("SELECT * FROM `teacher` WHERE `teacher_sid` =" + teacherId)
//     .then(results => {
//       data.push(results[0]);
//       res.json(data);
//     })
//     .catch(error => {
//       console.log("sql錯誤", error);
//     });
// });

router.get("/:subject/", (req, res) => {
  const teacherId = req.params.sid;
  const data = [];
  db.queryAsync("SELECT * FROM subject NATURAL JOIN subject_img")
    .then(results => {
      data.push(results);
      res.json(data);
    })
    .catch(error => {
      console.log("sql課程資料錯誤", error);
    });
});

// http://localhost:5000/handmade/teacher/subject/3
// 用subject_sid 查看某筆開課資料
const momnet=require('moment-timezone');
router.get("/:subject/:sid", (req, res) => {
  const subjectId = req.params.sid;
  const data = [];
  const myFormat='YYYY-MM-DD HH:mm:ss';
  db.queryAsync(
    "SELECT * FROM subject NATURAL JOIN subject_img WHERE `subject_sid` =" +
      subjectId
  )
    .then(results => {
      data.push(results);
      res.json(data);
      // console.log("date",data)
    })
    .catch(error => {
      console.log("subject_sid錯誤", error);
    });    
});

// 拿所有開課資料及開課圖
// router.get("/:subject/", (req, res) => {
//   const teacherId = req.params.sid;
//   const data = []; 
//   db.queryAsync(
//     "SELECT * FROM subject JOIN subject_img ON subject.teacher_sid=subject_img.teacher_sid"
//   )
//     .then(results => {
//       data.push(results);
//       res.json(data);
//     })
//     .catch(error => {
//       console.log("sql課程資料錯誤", error);
//     });
// });

// 用teacher_sid拿開課資料
// http://localhost:5000/handmade/teacher/subject/  
router.get("/:subject/", (req, res) => {
  const teacherId = req.params.sid;
  const data = []; //  放接到的資料
  db.queryAsync(
    "SELECT teacher_sid, subject_name, subject_date, subject_spend_time, subject_address, subject_price, subject_feature FROM `subject` WHERE `teacher_sid` = " +
      teacherId
      )
    .then(results => {
      data.push(results);
      res.json(data);
    })
    .catch(error => {
      console.log("sql課程資料錯誤", error);
    });
});

// 拿老師表所有資料
// http://localhost:5000/handmade/teacher/  
router.get("/", (req, res) => {
  const teacherId = req.params.sid;
  const data = []; //  放接到的資料
  db.queryAsync("SELECT * FROM `teacher`")
    .then(results => {
      data.push(results);
      res.json(data);
    })
    .catch(error => {
      console.log("sql老師資料錯誤", error);
    });
});



// router.get("/:sid/", (req, res) => {
//   const subjectId = req.params.sid;
//   //  放接到的資料
//   const data = [];
//   db.queryAsync(
//     "SELECT * FROM (`teacher` LEFT JOIN subject ON `teacher`.`teacher_sid` = `subject`.`teacher_sid`)" +
//       teacherId
//   )
//     .then(results => {
//       data.push(results[0]);
//       res.json(data);
//     })
//     .catch(error => {
//       console.log("sql錯誤", error);
//     });
// });


// 選擇某一位老師的所有課程 ?
// router.get("/:sid/", (req, res) => {
//   const teacherId = req.params.sid;
//   const data = [];
//   db.queryAsync(
//     "SELECT subject_name, subject_date, subject_spend_time, subject_address, subject_price, subject_feature FROM `subject` WHERE teacher_sid='3" +
//       teacherId
//   )
//     .then(results => {
//       data.push(results[0]);
//       res.json(data);
//     })
//     .catch(error => {
//       console.log("sql錯誤", error);
//     });
// });




module.exports = router;
