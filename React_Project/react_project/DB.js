    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    const port = 4000;
    const mysql = require("mysql");
    const db = mysql.createPool({
        host : "localhost",
        user : "root",
        password : "root",
        database : "react_project"
    });
    
    app.get('/' , (req, res) => {
        res.send("연결 되었습니다..");
    });
    
    
    app.post('/api/userList', (req, res) => {
        db.query("SELECT * FROM store_user" , (err , data) =>{
            if(err) {
                console.log(err);
                res.send(err);
            }else{
                console.log("success");
                res.send(data);
            }
        });
    });
    
    app.listen(port, ()=>{
        console.log("Connection at http://localhost:"+ {port});
    });

    