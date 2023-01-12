const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const bodyparse = require("body-parser");
const mysql = require("mysql");


var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "sql_study",
    insecureAuth : true,
});

connection.connect();
console.log(connection);

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
    connection.query("INSERT INTO ReactTest (userid) VALUES(?)" , [userid])

});

app.listen(port, () => {
    console.log("example app listening at http://localhost:${port}");
});
