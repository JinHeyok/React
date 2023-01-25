import React from "react";
import { Link } from "react-router-dom";

const Main =  (props) => {
    return (
        <>
            <h3>메인페이지입니다.</h3>
            <ul>
                <Link to="/product/1"><li>1번</li></Link>
                <Link to="/product/2"><li>2번</li></Link>
                {/* 해당 링크로 이동  */}
            </ul>
        </>
    );
}

export default Main;