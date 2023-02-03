import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState } from "react";
import { Link } from 'react-router-dom'




function UserList() {

    const [userList , setUserList] = useState([]);
    
    
        var reqOption = {
            method : "post",
            headers : {
                "content-type" : "application/json"
            }
        }
    
        fetch("/api/userList" , reqOption)
        .then((res) => res.json())
        .then(data =>  setUserList(data));

        return userList;
    }


    
export default function Main(){


        return(
        <>
            <p>메인화면입니다.</p>
        </>
        ); 
 }

