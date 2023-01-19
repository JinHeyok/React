import React, { Component } from 'react';

export class NameForm  extends Component{

    constructor(props){
        super(props);
        this.state = 
        {value : "" , 
        textarea : "Please write an essay about your favorite DOM element",
        select : 'cocount'};
    }

    handleChange = (event) => {
   //   this.setState({value:event.target.value});
   //   this.setState({textarea : event.target.value});
        this.setState({select: event.target.value});
    }

    handleSubmit = (event) => {
       //alert("name 속성의 이름 값은 : " + this.state.value);
       //alert("textareat 속성의 값은 : " + this.state.textarea);
       alert("select된 값은 : " + this.state.select);
       event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    {/* Name: <input type={"text"} value={this.state.value} onChange={this.handleChange}></input> */}
                    {/* TextArea : <textarea value={this.state.textarea} onChange={this.handleChange}></textarea> */}
                    <select onChange={this.handleChange} defaultValue={"Cocount"}>
                        <option value="grapeFruit">GrapeFruit</option>
                        <option value="Lime">Lime</option>
                        <option value="Cocount" >Coconut</option>
                        <option value="Mango">Mango</option>
                    </select>
                </label>
                <input type={"submit"} value="Submit"></input> 
            </form>

        );
    }
}

export default NameForm;