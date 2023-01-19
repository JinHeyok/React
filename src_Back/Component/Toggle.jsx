import React, { Component } from 'react';

export class Toggle extends Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn : true};
    //this.hadleClick = this.hadleClick.bind(this);
    }

    handleClick = () => { //바인딩 애로우 실험적인 문법
    console.log('ToggleClass hadleClick');
    //console.log('this' , this)
    this.setState(state => ({
        isToggleOn : !state.isToggleOn
    }));
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'on' : 'off'}
            </button>
        );
    }

}
export default Toggle;