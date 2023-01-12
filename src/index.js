import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import userEvent from '@testing-library/user-event';
import ClockClass from './Component/Clock';
import Toggle from './Component/Toggle';
import LoginControl from './Component/Greeting';
import MailBox from './Component/Mailbox';
import Page from './Component/RenderShild';
import List from './Component/List';
import NameForm from './Component/NameForm';
import Reservation from './Component/Resevation';
import Calculator from './Component/Calulator';
import ClickExample from './Component/ClickExample';
import SelectSubmit from './Component/selectSubmit';



const root = ReactDOM.createRoot(document.getElementById('root'));

class Welcome extends React.Component{
  render(){
    return <h1>Hello, {this.props.name}</h1>
  }
}


function tick(){
  console.log('call back');
  const element = (
    <div>
      <h1>Hello World</h1>
      <h2>Clock function <Clock date={new Date()}></Clock> </h2>
  </div>
)


function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}

function Comment(props){
  return (
      <div className='comment'>
        <div className='userInfo'>
            {props.name}
        </div>
        <div className='userage'>
            {props.age}
        </div>
        <div className='useradderss'>
            {props.address}
        </div>
      </div>
  );
};

const comment = {
  name : "홍길동",
  age : "25",
  address : "서울시 서초구 사임당로"
};

function Clock(props){
  return(
    <div>
        <h2>{props.date.toLocaleTimeString()}</h2>
    </div>
  );
}

function Form(){
  function hadleSubmit(e){
    e.preventDefault();
    console.log("Submit Click");
  }
  return (
    <form onSubmit={hadleSubmit}>
      <button type='submit'>submit</button>
    </form>
  )
}

function MailBoxText(){
  const message = ['React', 'Re: React' , 'Re:Re:React'];
  return message;
}

function ListKey(){
  const numbers = [ 1, 2, 3, 4, 5];
  const doubled = numbers.map(numbers => { return numbers * 2 });
  return doubled;
}

function Fancyboreder(props){
  return(
    <div className={'FancyBorder FancyBoredr-' + props.color} >
        {props.children}
    </div>
  );
}

function WelcomeDialog(){
  return(
    <Fancyboreder color="blue">
      <h1 className='Dialog-title'>
        Welcome
      </h1>
      <p className='Dialog-message'>
        Thank you for visiting our spacecraft!
      </p>
    </Fancyboreder>
  )
}


class CustomTextInput extends React.Component{

  constructor(props){
      super(props);

      this.textinput = React.createRef();
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

function TextInput(props){

  return (
    <div>
        <input ref={props.inputRef}></input>
    </div>
  );
}

class Parent extends React.Component{
  constructor(props){
    super(props);
    this.inputElemnet = React.createRef();
  }
  render(){
    return(
      <CustomTextInput inputRef={this.inputElemnet}/>
    );
  }

}

function add(a , b){
  return a + b;
}

const ThemeContext = React.createContext('light');

class Context extends React.Component{
  render() {
    return (
      <ThemeContext.Provider value = "dark">
        <Toolbar theme="dark" />
      </ThemeContext.Provider>);
  }
}

function Button(props){
  // console.log(props.theme);
}

function Toolbar(props){
  return(
      <div>
          <ThemdButton />
      </div>
  );

}
class ThemdButton extends React.Component{
  static contextType = ThemeContext;
  render(){
    return <Button theme = {this.context} />
  }
}


root.render(
  <React.StrictMode>
    {element}
    <hr />
    <div>
      <Welcome name = "Test" />
      <Welcome name = "Edite" />
    </div>
    <div>
      <Comment name={comment.name} age={comment.age} address={comment.address}/>
    </div> 
    <hr />
    <div>
      <ClockClass />
    </div>
    <hr />
    <div>
      {Form()}
    </div>
    <div>
      <Toggle />
    </div>
      <LoginControl />
    <hr />
      <MailBox Message ={MailBoxText()}/>
    <hr />
      <Page />
    <hr />
    <ul><List /></ul>  
    <hr />
    <NameForm />
    <hr />
    <Reservation />
    <hr />
    <Calculator scale="f"/>
    <hr />
    <WelcomeDialog />
    <hr />
    <CustomTextInput />
    <hr />
    <ClickExample />
    <hr />
    <Context />
    <hr />
    <SelectSubmit />
  </React.StrictMode>
);
}
setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
