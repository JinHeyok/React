
import React from "react";


export class ClickExample extends React.Component{
    constructor(props){
        super(props)
        this.state = {isOpen : false}
        this.toggleContainer = React.createRef();
    }

    componentDidMount = () => {
        window.addEventListener("click",this.onClickOutsidehandler())
    };
    

    componentWillUnmount = () => {
        window.addEventListener("click" , this.onClickHadnler())
    }

    onClickHadnler = () => {
        this.setState(currentState => ({
            isOpen : !currentState.isOpen
        }));
    }


    onClickOutsidehandler = (event) => {
        if(this.state.isOpen && !this.toggleContainer.current.contains(event.target)){
            this.setState({isOpen :false});
        }
    }

    render(){
        return(
            <div ref={this.toggleContainer}>
                <button onClick={this.onClickHadnler}>Select an option</button>
                {this.state.isOpen && (
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                )}
            </div>
        )
    }
}

export default ClickExample;