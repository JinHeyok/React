import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Product = (props) => {
    const productid = useParams().productid;
    // 넘어올 대 파라미터값의 이름이 동일해야 가져온다.
    // 뒤에 해당 이름값을 붙치면 그 해당 이름의 파라미터값을 가져온다.
    const location = useLocation();
    //URL에 관련된 함수 
    // const searchParams = useSearchParams();
    // const searchParamss = useSearchParams().get('serach');
    return (
        <>
            <h3>{productid} 상품 페이지입니다.</h3>
            <ul>
                <li>hash : {location.hash}</li> {/* 주소의 # 문자열 뒤의 값 */}
                <li>pathname : {location.pathname}</li> {/* 현재 주소 경로 */}
                <li>serach : {location.search}</li>{/* ?를 포함한 쿼리스트링 */}
                <li>state : {location.state}</li>{/* 페이지로 이동시 임의로 넣을 수 있는 상태 값 */}
                <li>key : {location.key}</li> {/* location 객체의 고유 값, 초기값은 default, 페이지가 변경될 때 마다 고유의 값이 생성된다.*/}
            </ul>
            <hr />
            <ul>
                {/* <li>keyWorkds : {searchParams}</li>
                <li>keyWorkd : {searchParamss}</li> */}
            </ul>
        </>
    );
}

export default Product;