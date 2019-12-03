const express = require("express"); //引入express應用程式
const app = express();
const router = express.Router();
const mysql = require("mysql");
const db_Obj = require("C:/Users/__connect.json"); //連線到資料庫
const db = mysql.createConnection(db_Obj);
const bluebird = require("bluebird"); //使用兩次sql
const multer = require("multer"); //引入檔案
const upload = multer({ dest: "tmp_uploads" }); //設定檔案暫存目錄
const fs = require("fs"); //讀檔案寫檔案
const nodemailer = require("nodemailer");
bluebird.promisifyAll(db);
router.post("/", (req, res) => {
  console.log(req.body);
  np;
  res.send("Member-Page");
});

class login {
  constructor(account, password) {
    this.member_account = account;
    this.member_password = password;
  }
  getUserByIdSQL() {
    let sql = `SELECT * FROM member WHERE member_account = "${this.member_account}" AND member_password = "${this.member_password}"`;
    return sql;
  }
}
class getMemberData {
  constructor(member_id) {
    this.member_sid = member_id;
  }
  getUserByIdSQL() {
    let sql = `SELECT * FROM member WHERE member_sid = "${this.member_sid}"`;
    return sql;
  }
}
class getMemberBonus {
  constructor(member_sid, page_sid) {
    this.member_sid = member_sid;
    this.page_sid = page_sid;
  }
  getUserBonusByIdSQL() {
    let sql =
      "SELECT CEILING((`order_total_price`)*0.08-`member_used_bonus`) total , `order_sid` FROM `order` WHERE `member_sid` = " +
      this.member_sid;
    return sql;
  }
  getUserBonusByIdSQL10() {
    let sql =
      "SELECT CEILING((`order_total_price`)*0.08-`member_used_bonus`) total , `order_sid` FROM `order` WHERE `member_sid` = " +
      this.member_sid +
      " ORDER BY `order_create_time` DESC  LIMIT 0,10";
    return sql;
  }
  pageChangeSQL() {
    let sql =
      "SELECT CEILING((`order_total_price`)*0.08-`member_used_bonus`) total , `order_sid` FROM `order` WHERE `member_sid` = " +
      this.member_sid +
      " ORDER BY `order_create_time` DESC  LIMIT " +
      (this.page_sid == 0 ? this.page_sid * 10 : this.page_sid * 10) +
      "," +
      10;
    return sql;
  }
}

class register {
  constructor(account, password, email) {
    this.member_account = account;
    this.member_password = password;
    this.member_email = email;
  }
  registerUserSQL() {
    let sql = `INSERT INTO member(member_account, member_password, member_email) VALUES ("${this.member_account}", "${this.member_password}", "${this.member_email}")`;
    return sql;
  }
}

class fbRegister {
  constructor(name, email, token_id) {
    this.member_name = name;
    this.member_email = email;
    this.token_id = token_id;
  }
  allMemberSQL() {
    let sql = `SELECT token_id FROM member WHERE token_id = "${this.token_id}"`;
    return sql;
  }
  registerUserSQL() {
    let sql = `INSERT INTO member(  member_email,member_name,token_id) VALUES ( "${this.member_email}","${this.member_name}","${this.token_id}")`;
    return sql;
  }
  getUserByTokenIdSQL() {
    let sql = `SELECT * FROM member WHERE token_id = "${this.token_id}"`;
    return sql;
  }
}

class allMemberAccount {
  constructor(account) {
    this.member_account = account;
  }
  allMemberSQL() {
    let sql = `SELECT member_account FROM member WHERE member_account = "${this.member_account}"`;
    return sql;
  }
}
class MemberImg {
  constructor(member_sid, member_photo_name) {
    this.member_sid = member_sid;
    this.member_photo_name = member_photo_name;
  }
  addMemberImg() {
    let sql = `INSERT INTO member_photo( member_sid,member_photo_name) VALUES ( "${this.member_sid}","${this.member_photo_name}")`;
    return sql;
  }
}
class MemberChange {
  constructor(member_sid, member_photo_name) {
    this.member_sid = member_sid;
    this.member_photo_name = member_photo_name;
  }
  getMemberImg() {
    let sql = `SELECT  member_photo_name, member_photo_create
    FROM  member_photo WHERE member_sid = "${this.member_sid}"
    ORDER BY member_photo_create DESC LIMIT 1`;
    return sql;
  }
}
class MemberEdit {
  constructor(
    member_sid,
    member_email,
    member_name,
    member_nickname,
    member_birth,
    member_phone,
    member_address
  ) {
    this.member_sid = member_sid;
    this.member_email = member_email;
    this.member_name = member_name;
    this.member_nickname = member_nickname;
    this.member_birth = member_birth;
    this.member_phone = member_phone;
    this.member_address = member_address;
  }
  MemberEdit() {
    let sql = `UPDATE member SET member_email="${this.member_email}",member_name="${this.member_name}",member_nickname="${this.member_nickname}",member_birth="${this.member_birth}",member_phone="${this.member_phone}",member_address="${this.member_address}" WHERE member_sid = "${this.member_sid}"`;
    return sql;
  }
}
class MemberPasswordEdit {
  constructor(member_sid, member_password) {
    this.member_sid = member_sid;
    this.member_password = member_password;
  }
  MemberPasswordEdit() {
    let sql = `UPDATE member SET member_password="${this.member_password}" WHERE member_sid = "${this.member_sid}"`;
    return sql;
  }
}

class MemberEmailPWD {
  constructor(member_email, member_account, member_sid, member_password) {
    this.member_email = member_email;
    this.member_account = member_account;
    this.member_sid = member_sid;
    this.member_password = member_password;
  }
  getMemberPwd() {
    let sql = `SELECT  member_password, member_sid
    FROM  member WHERE member_email = "${this.member_email}" AND member_account="${this.member_account}"`;
    return sql;
  }
  editMemberPwd() {
    let sql = `UPDATE member SET member_password="${this.member_password}" WHERE member_sid="${this.member_sid}"`;
    return sql;
  }
}
//----------------------------------------------------------------------------------------------------------------------------------------
router.post("/login", (req, res, next) => {
  let Member = new login(req.body.member_account, req.body.member_password);
  db.query(Member.getUserByIdSQL(), (error, rows) => {
    if (rows.length == 0) {
      res.json({
        status: "404",
        message: "請輸入正確的帳號或密碼"
      });
      return;
    } else if (error) {
      res.json({
        status: "404",
        message: "伺服器錯誤，請稍後在試！"
      });
      return;
    } else {
      res.json({
        status: "202",
        message: "歡迎登入!",
        info: rows[0]
      });
      return;
    }
  });
});
router.post("/getMemberData", (req, res, next) => {
  let Member = new getMemberData(req.body.member_sid);
  console.log(req.body.member_sid);
  console.log(Member.getUserByIdSQL());
  db.query(Member.getUserByIdSQL(), (error, rows) => {
    if (rows.length == 0) {
      res.json({
        status: "404",
        message: "無此帳號"
      });
      return;
    } else if (error) {
      res.json({
        status: "404",
        message: "伺服器錯誤，請稍後在試！"
      });
      return;
    } else {
      res.json({
        status: "202",
        message: "歡迎登入!",
        info: rows[0]
      });
      console.log(rows[0]);
      return;
    }
  });
});
//-------------------------------------------------------------------------------------------------------
router.post("/register", (req, res, next) => {
  let allMember = new allMemberAccount(req.body.member_account);
  let Member = new register(
    req.body.member_account,
    req.body.member_password,
    req.body.member_email
  );
  db.query(allMember.allMemberSQL(), (error, rows) => {
    if (rows.length >= 1) {
      return res.json({ status: "404", message: "此帳號已註冊" });
    }
    db.query(Member.registerUserSQL(), (error, rows) => {
      res.json({
        status: "202",
        message: "跳轉中"
      });
      return;
    });
  });
});
//-------------------------------------------------------------------------------------------------------

router.post("/fbLogin", (req, res, next) => {
  let allMember = new fbRegister("", "", req.body.token_id);
  console.log(allMember.allMemberSQL());
  let Member = new fbRegister(
    req.body.member_name,
    req.body.member_email,
    req.body.token_id
  );
  db.query(allMember.allMemberSQL(), (error, rows) => {
    console.log(rows);
    if (rows.length >= 1) {
      db.query(allMember.getUserByTokenIdSQL(), (error, rows) => {
        res.json({
          status: "202",  
          message: "登入成功跳轉中",
          info: rows[0]
        });
      });
      return;
    }
    db.query(Member.registerUserSQL(), (error, rows) => {
      db.query(allMember.getUserByTokenIdSQL(), (error, rows) => {
        res.json({
          status: "202",
          message: "註冊成功跳轉中",
          info: rows[0]
        });
      });
      return;
    });
  });
});
//-----------------------------------------------------------------------------------------------------------------------------

//單圖;
router.post("/upload", upload.single("file"), (req, res) => {
  //單張圖片上傳
  console.log(req.file);
  if (req.file && req.file.originalname) {
    switch (req.file.mimetype) {
      case "image/png":
      case "image/jpeg":
      case "image/jpg":
        res.json(req.file);
        fs.createReadStream(req.file.path) //讀檔案
          .pipe(
            //串進去
            fs.createWriteStream(
              "./public/images/member/member" + req.file.originalname
            ) //寫檔案
          );
        break;
      default:
    }
  } else {
    res.send("失敗");
  }
});
router.post("/memberImg", upload.single("file"), (req, res) => {
  //單張圖片上傳
  console.log(req.body);
  let Member = new MemberImg(req.body.member_sid, req.body.member_photo_name);
  console.log(Member.addMemberImg());
  if (req.body.member_sid) {
    db.query(Member.addMemberImg(), (error, rows) => {
      res.json({
        status: 200,
        message: "照片上傳成功"
      });
    });
  } else {
    res.json({
      status: 404,
      message: "照片上傳失敗"
    });
  }
});
router.post("/getMemberImg", (req, res) => {
  //單張圖片上傳
  console.log(req.body);
  let Member = new MemberChange(req.body.member_sid);
  console.log(Member.getMemberImg());
  if (req.body.member_sid) {
    db.query(Member.getMemberImg(), (error, rows) => {
      res.json({
        status: 200,
        message: "照片上傳成功",
        info: rows
      });
    });
  } else {
    res.json({
      status: 404,
      message: "照片上傳失敗"
    });
  }
});
//------------------------------------------------------------------------------------------------------------------------------------------------------
router.post("/MemberEdit", (req, res) => {
  let Member = new MemberEdit(
    req.body.member_sid,
    req.body.member_email,
    req.body.member_name,
    req.body.member_nickname,
    req.body.member_birth,
    req.body.member_phone,
    req.body.member_address
  );
  console.log(req.body);
  console.log(Member.MemberEdit());
  db.query(Member.MemberEdit(), (error, rows) => {
    console.log(rows);
    if (rows) {
      return res.json({ status: "202", message: "更新成功" });
    }
  });
});
router.post("/MemberPasswordEdit", (req, res) => {
  let Member = new MemberPasswordEdit(
    req.body.member_sid,
    req.body.member_password
  );
  console.log(req.body);
  console.log(Member.MemberPasswordEdit());
  db.query(Member.MemberPasswordEdit(), (error, rows) => {
    console.log(rows);
    if (rows) {
      return res.json({ status: "202", message: "修改成功,請重新登入" });
    } else {
      return res.json({ status: "404", message: "修改失敗" });
    }
  });
});

//------------------------------------------------------------------------------ mail

router.post("/mail", (req, res) => {
  let email = req.body.member_email;
  let account = req.body.member_account;
  let Member = new MemberEmailPWD(email, account);
  console.log(email, account);
  console.log(Member.getMemberPwd());
  db.query(Member.getMemberPwd(), (error, rows) => {
    console.log(rows);
    if (rows.length >= 1) {
      let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "handmade20190927@gmail.com",
          pass: "Aa27089433"
        }
      });
      let mailOptions = {
        from: "handmade20190927@gmail.com",
        to: email,
        subject: "密碼設定",
        html: `
        <h1>親愛的會員您好,您的密碼是:${rows[0].member_password}</h1>
        <div>若要修改密碼請點擊連結重新設定密碼<a href="http://localhost:3000/handmade/email/${rows[0].member_sid}">http://localhost:3000/handmade/email/${rows[0].member_sid}</a></div>
        `
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.json({
            status: "404",
            message: error
          });
        }
      });
      return res.json({
        status: "202",
        message: "請至信箱確認密碼"
      });
    } else {
      res.json({
        status: "404",
        message: "請輸入正確的資訊"
      });
    }
  });
  console.log(email);
});
router.post("/mailEdit", (req, res) => {
  let member_sid = req.body.member_sid;
  let member_password = req.body.member_password;
  let Member = new MemberEmailPWD("", "", member_sid, member_password);
  console.log(Member.editMemberPwd());
  db.query(Member.editMemberPwd(), (error, rows) => {
    console.log(rows.affectedRows);
    if (rows.affectedRows === 1) {
      res.json({
        status: "202",
        message: "修改成功"
      });
    } else {
      res.json({
        status: "404",
        message: "修改失敗"
      });
    }
  });
});

//------------------------------------------------------------------------------ mail

router.post("/bonus", (req, res) => {
  console.log(req.body);
  let member_sid = req.body.member_sid;
  let Member = new getMemberBonus(member_sid);
  console.log(Member.getUserBonusByIdSQL());
  db.query(Member.getUserBonusByIdSQL(), (error, rows) => {
    console.log(rows);
    if (rows.length >= 1) {
      res.json({
        status: "202",
        message: "資料取得",
        data: rows
      });
    } else {
      res.json({
        status: "404",
        message: "沒有訂單資訊"
      });
    }
  });
});
router.post("/bonus10", (req, res) => {
  console.log(req.body);
  let member_sid = req.body.member_sid;
  let Member = new getMemberBonus(member_sid);
  console.log(Member.getUserBonusByIdSQL10());
  db.query(Member.getUserBonusByIdSQL10(), (error, rows) => {
    console.log(rows);
    if (rows.length >= 1) {
      res.json({
        status: "202",
        message: "資料取得",
        data: rows
      });
    } else {
      res.json({
        status: "404",
        message: "沒有訂單資訊"
      });
    }
  });
});
router.post("/bonuspage", (req, res) => {
  console.log(req.body);
  let member_sid = req.body.member_sid;
  if(req.body.page_sid<0){
    req.body.page_sid=0
  }
  let page_sid = req.body.page_sid;
  let Member = new getMemberBonus(member_sid, page_sid);
  console.log(Member.pageChangeSQL());
  db.query(Member.pageChangeSQL(), (error, rows) => {
    console.log(rows);
    if (rows.length >= 1) {
      res.json({
        status: "202",
        message: "資料取得",
        data: rows
      });
    } else {
      res.json({
        status: "404",
        message: "沒有訂單資訊"
      });
    }
  });
});

//------------------------------------------------------------------------------
module.exports = router;
