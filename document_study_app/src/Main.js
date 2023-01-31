import React from "react";
import { Link } from "react-router-dom";

const Main =  (props) => {
    return (
        <>
            <h3>메인페이지입니다.</h3>
            <ul>
                <Link to="/product/1"><li>1번</li></Link>
                <Link to="/product/2"><li>2번</li></Link>
                <Link to="/component/parameterId"><li>테스트페이지 이동</li></Link>
                {/* /뒤에오는 값이 파라미터 값일 수 있다. */}
                {/* 해당 링크로 이동  */}
            </ul>
        </>
    );
}

export default Main;