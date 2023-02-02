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

        const list = UserList();

        return(
        <>
        <h4>메인화면입니다.</h4>
        <Link to="/login"><h5>로그인</h5></Link>
        <Link to="/store"><h5>상품페이지</h5></Link>
        <table>
                    <tr>
                        <th>인덱스</th>
                        <th>아이디</th>
                        <th>비밀번호</th>
                    </tr>
        {list.map((item) => {
            return(
                    <tr>
                        <td>{item.su_index}</td>
                        <td>{item.su_id}</td>
                        <td>{item.su_pw}</td>
                    </tr>

            )
        })}
        </table>
        </>
        ); 
 }

