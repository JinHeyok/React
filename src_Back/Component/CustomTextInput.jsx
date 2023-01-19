import React, { Component } from "react";

export class CustomTextInput extends Component{

    constructor(props){
        super(props);

        this.textinput = React.createRef();
        console.log(this.textinput);
    }

    focus(){
        this.textinput.current.focus();
    }

    render(){
        return(
            <input type={"text"} ref={this.textinput}></input>
        );
    }

}

export default CustomTextInput;