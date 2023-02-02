import React from "react";
import {Link} from "react-router-dom"

const Store = () => {
    return(
        <>
        <h4>스토어 화면입니다.</h4>
        <Link to="/login"><h5>로그인 하기</h5></Link>
        </>
    );
}

export default Store;