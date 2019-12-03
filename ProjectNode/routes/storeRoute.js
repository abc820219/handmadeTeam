const express = require("express"); //引入express應用程式
const router = express.Router();
const mysql = require("mysql");
const db_Obj = require("C:/Users/__connect.json"); //連線到資料庫
const db = mysql.createConnection(db_Obj);
const bluebird = require("bluebird"); //使用兩次sql
bluebird.promisifyAll(db);
// import OrderDetail from "../domain/memberOrder";

router.get("/:storeId?", (req, res) => {
  let sql;
  if (req.params.storeId) {
    sql =
      "SELECT * FROM `store` WHERE `store`.area_sid = " + req.params.storeId;
  } else {
    sql = "SELECT * FROM `store` WHERE 1";
  }
  db.queryAsync(sql).then(results => {
    res.json(results);
  });
});

router.get("/allStore", (req, res) => {
  let sql = "SELECT * FROM `store` WHERE 1";
  db.queryAsync(sql).then(results => {
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const condition = req.body;
  console.log(condition);
  let sql;
  let locateSql = condition.locate_sid
    ? ` AND area_sid = ${condition.locate_sid}`
    : "";
  let accompanyPartnerSql = condition.accompanyPartner
    ? ` AND store_partner = 1`
    : "";
  let accompanyChildSql = condition.accompanyChild
    ? ` AND store_child = 1`
    : "";
  let lot = condition.lot
    ? ` AND store_longitude BETWEEN (${condition.lot}-0.1) AND (${condition.lot}+0.1) `
    : "";
  let lat = condition.lat
    ? ` AND  store_latitude BETWEEN (${condition.lat}-0.1) AND (${condition.lat}+0.1)`
    : "";

  sql =
    "SELECT * FROM `store` WHERE 1" +
    locateSql +
    accompanyPartnerSql +
    accompanyChildSql +
    lot +
    lat;
  console.log(sql);
  db.queryAsync(sql).then(results => {
    res.json(results);
    console.log(results);
  });
});

router.post("/getLocateName", (req, res) => {
  sql = "SELECT * FROM `area` WHERE `area_sid` = " + req.body.locate_sid;
  db.queryAsync(sql).then(results => {
    // console.log(results);
    res.json(results[0]);
  });
});
//----------------------------------- 地圖的
class storeSelect {
  constructor(store_sid, area_sid, store_child, store_partner) {
    this.store_sid = store_sid;
    this.area_sid = area_sid;
    this.store_child = store_child;
    this.store_partner = store_partner;
  }
  storeOne() {
    let sql;
    return (sql = `SELECT * FROM store WHERE store_sid = ${this.store_sid}`);
  }
  storeArea() {
    let sql;
    return (sql = `SELECT * FROM store WHERE area_sid = ${this.area_sid}`);
  }
  storeChild() {
    let sql;
    return (sql = `SELECT * FROM store WHERE store_child = ${this.store_child}`);
  }
  storePartner() {
    let sql;
    return (sql = `SELECT * FROM store WHERE store_partner = ${this.store_partner}`);
  }
}
//------------------------------------------
// router.post("/storeOne", (req, res, next) => {
//   let store = new storeSelect(req.body.area_sid, req.body.store_sid);
//   console.log(store);
//   console.log(store.storeOne());
//   db.query(store.storeOne(), (error, rows) => {
//     if (rows.length >= 1) {
//       return res.json({ status: "202", message: "單筆資料", data: rows });
//     } else {
//       return res.json({ status: "404", message: "錯誤" });
//     }
//   });
// });
// router.post("/storeArea", (req, res, next) => {
//   let store = new storeSelect(req.body.area_sid, req.body.store_sid);
//   console.log(store);
//   console.log(store.storeArea());
//   db.query(store.storeArea(), (error, rows) => {
//     if (rows.length >= 1) {
//       return res.json({ status: "202", message: "地區多筆資料", data: rows });
//     } else {
//       return res.json({ status: "404", message: "錯誤" });
//     }
//   });
// });
// router.post("/storechild", (req, res, next) => {
//   let store = new storeSelect(
//     req.body.area_sid,
//     req.body.store_sid,
//     req.body.store_child
//   );
//   console.log(store);
//   console.log(store.storeChild());
//   db.query(store.storeChild(), (error, rows) => {
//     if (rows.length >= 1) {
//       return res.json({ status: "202", message: "可帶小孩", data: rows });
//     } else {
//       return res.json({ status: "404", message: "錯誤" });
//     }
//   });
// });
// router.post("/storepartner", (req, res, next) => {
//   let store = new storeSelect(
//     req.body.area_sid,
//     req.body.store_sid,
//     req.body.store_child,
//     req.body.store_partner
//   );
//   console.log(store);
//   console.log(store.storePartner());
//   db.query(store.storePartner(), (error, rows) => {
//     if (rows.length >= 1) {
//       return res.json({ status: "202", message: "可帶小孩", data: rows });
//     } else {
//       return res.json({ status: "404", message: "錯誤" });
//     }
//   });
// });
//----------------------------------- 地圖的
module.exports = router;
