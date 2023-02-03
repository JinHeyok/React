    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    const port = 4000;
    const cors = require("cors");
    const mysql = require("mysql");
    const db = mysql.createPool({
        host : "localhost",
        user : "root",
        password : "root",
        database : "react_project"
    });

    //요청 데이터를 받기위한 
    app.use(bodyParser.urlencoded({extended : false}));
    app.use(cors());
    app.use(bodyParser.json());//요청온 데이터를 JSON 으로변형 
    
    
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


    app.post('/api/userLogin', (req, res) => {
        console.log(req.body);
        const id = req.body.id;
        const pw = req.body.pw;

        db.query("SELECT su_id AS id , COUNT(*) as count FROM store_user WHERE su_id = ? AND su_pw = ? " ,  [id ,pw] , (err , data) => {
            if(err){
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

    