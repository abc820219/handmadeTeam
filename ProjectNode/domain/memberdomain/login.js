class Login {
    constructor(member_account, member_password) {
      this.member_account = member_account;
      this.member_password = member_password;
    }
    LoginSql() {
      let sql = `SELECT * FROM member WHERE member_account = ${this.member_account} AND member_password = ${this.member_password}`;
      return sql;
    }
  }
  export default Login