const express = require("express");
const app = express();
const port = 3001; //3000 과 다른 포트
const cors = require("cors");
const bodyparse = require("body-parser");
const mysql = require("mysql");


var connection = mysql.createConnection({
    host : "localhost", //호스트이름 
    user : "root", //유저 
    password : "root", //패스워드
    database : "sql_study", // DB명 
    insecureAuth : true,
});

connection.connect(); //연결 

app.use(bodyparse.urlencoded({extended : false}));
app.use(cors());
app.use(bodyparse.json());

app.get("/", (req, res) => {
    res.send("hello");
});
console.log(app);
app.post("/" , (req, res) => {
    const userid = req.body.userid;
    console.log(userid);
    //query를 추가할 부분 
    connection.query("INSERT INTO ReactTest (userid) VALUES(?)" , [userid]) //쿼리 날려주기

});

app.listen(port, () => {
    console.log("example app listening at http://localhost:" + {port});
});
