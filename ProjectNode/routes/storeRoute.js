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
  sql =
    "SELECT * FROM `store` WHERE 1" +
    locateSql +
    accompanyPartnerSql +
    accompanyChildSql;

  db.queryAsync(sql).then(results => {
    res.json(results);
  });
});

router.post("/getLocateName", (req, res) => {
  sql = "SELECT * FROM `area` WHERE `area_sid` = " + req.body.locate_sid;
  db.queryAsync(sql).then(results => {
    // console.log(results);
    res.json(results[0]);
  });
});
//----------------------------------- 漢文的
class storeSelect {
  constructor(store_sid, area_sid) {
    this.store_sid = store_sid;
    this.area_sid = area_sid;
  }
  storeOne() {
    let sql;
    return sql = `SELECT * FROM store WHERE store_sid = ${this.store_sid}`;
  }
}

//----------------------------------- 漢文的
module.exports = router;
