import React from "react";
import {Link} from "react-router-dom"


export class Store extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            path : props.option.path,
            text : props.option.text
        }
    }

    render(){

        return(
            <>
            <h4>스토어 화면입니다.</h4>
            <Link to={this.state.path}><h5>{this.state.text}</h5></Link>
            </>
        );
    }
}

export default Store;
