import React, { Component } from "react";

export class Reservation extends Component{
    constructor(props){
        super(props);
        this.state ={
            isGoing : true,
            number : 2
        };
    }


    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })
    }

    render(){
        return(
            <form>
                <label>
                    Is going 
                    <input name="isGoing" type={"checkbox"} checked={this.state.isGoing} onChange={this.handleInputChange}>
                    </input>
                </label>
                <br />
                <label>
                    Number of guests
                    <input name="number" type={"checkbox"} value={this.state.number} onChange={this.handleInputChange}>
                    </input>
                </label>
            </form>
        );
    }


}

export default Reservation;