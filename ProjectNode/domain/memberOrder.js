class OrderDetail {
  constructor(orderType, user, item) {
    this.orderType = orderType;
    this.user = user;
    this.item = item;
  }
  orderDetailSQL() {
    let sql = "";
    switch (this.orderType) {
      case 1:
        sql =
          "SELECT * FROM `order` `o` JOIN `course_order` `co` JOIN `course` `c` JOIN `course_img` `ci` ON `o`.order_sid = `co`.order_sid AND `co`.`course_sid` = `c`.`course_sid` AND `co`.`course_sid` = `ci`.`course_sid` WHERE `o`.member_sid = " +
          this.user +
          " AND `o`.order_sid = " +
          this.item;
        return sql;
        break;
      case 2:
        sql =
          "SELECT * FROM ((`order` NATURAL JOIN `ingredients_order`) NATURAL JOIN `ingredients`) WHERE `order`.`member_sid` = " +
          this.user;
        return sql;
        break;
      default:
        return;
    }
  }
}

router.post("/orderDetail", (req, res, next) => {
  let orderDetail = new OrderDetail(
    req.body.orderType,
    req.body.user,
    req.body.item
  );
  db.query(orderDetail.orderDetailSQL(), (error, rows) => {
    if (error) {
      res.json({
        status: "404",
        message: "伺服器錯誤，請稍後在試！"
      });
      return;
    } else {
      res.json(rows[0]);
      return;
    }
  });
});

export default OrderDetail;
