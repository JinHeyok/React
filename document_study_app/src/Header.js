import React from "react";
import { Link } from "react-router-dom";

function Headers() {
    return (
        <>
            <Link to="/"><h1>헤더입니다.</h1></Link>
            {/* 클릭시 처음 메인 페이지로 이동  */}
        </>
    )
}

export default Headers;