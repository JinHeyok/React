import React from "react";
import { Link, useParams } from "react-router-dom";



const Test = (props) => {

    const test = useParams();
    const test1 = "테스트1";
    const test2 = "테스트2";

    return (
        <>
            <h3>테스트 페이지 입니다.</h3>
            <h3>파라미터 값 : {test.testid}</h3>
            <h5><Link to={"./test/1" + test1}>1번</Link></h5>
            <h5><Link to={"./test/" + test2}>2번</Link></h5>
        </>
    );
}

export default Test;