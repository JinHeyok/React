import React, { Component } from 'react';


export class Page extends Component{
    constructor(props){
        super(props);
        this.state = {
            showWarnning : true
        };
    }

    WarningBanner(props){
        if(!props.warn){
            return null;
        }else{
            return (
                <div>
                    Warnning!
                </div>
            );
        };
    }

    handleToggleClick = () => {
        this.setState(state => ({
            showWarnning : !state.showWarnning
        }));
    }

    render(){
        return(
            <div>
                <this.WarningBanner warn={this.state.showWarnning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarnning ? "hide" : "show"}
                </button>
            </div>
        );
    }
}
export default Page;