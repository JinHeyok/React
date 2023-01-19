import React from "react";


export class DBconnection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userid : "",
        }
    }

    handlChange = (event) =>{
        this.setState({userid : event.target.value})
        console.log(this.state.userid); 
    }

    onSubmit = () => {
        const textbox = {
            userid : this.state.userid,
        };

        fetch("http://localhost:3001", { //해당 포트로 연결 
            method : "post",    //메소드 
            headers: {
                "content-type" : "application/json", //타입 정의 
            },
            body: JSON.stringify(textbox), //json
        })
        
        .then((res) => res)
        .then((json) => {
            console.log(json)
            this.setState({
                userid : json.text//jsontype test로 
            });
        });
    }



    render(){
        return(
        <div>
            <h3>아이디 입력</h3>
            <input type={"text"}name = "userid" onChange={this.handlChange}></input>
            <input type={"submit"} onClick={this.onSubmit} value="전송"></input>
        </div>
        )

    }

};



export default DBconnection;