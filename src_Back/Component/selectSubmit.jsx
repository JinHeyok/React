import React from "react";


export class selectSubmit extends React.Component{

        constructor(props){
            super(props)
            this.state = {
                value : "test1",
            };
        }


        onSubmitHandle = (event) => {
                console.log(this.state.value);
                alert("선택값은 : " + this.state.value);

                event.preventDefault();
        }

        onChangehandle = (event) => {
            this.setState({value : event.target.value});
        }

        render(){

            return  (
            <form onSubmit={this.onSubmitHandle}>
                <select onChange={this.onChangehandle} defaultValue={"test1"}>
                    <option value="test1">test1</option>
                    <option value="test2">test2</option>
                    <option value="test3">test3</option>
                    <option value="test4">test4</option>
                </select>
                <button>submit</button>
            </form>
            );
        }
}

export default selectSubmit;