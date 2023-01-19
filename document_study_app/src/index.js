import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const helloWorld = <h1>Hello World</h1>;

// ------------------------------------------------------------------
function formatName(user){
  if(user){
    return user.firstName + user.middleName + user.lastName;
  }
  return "없다.";
}
//함수에서 이름을 조합한다.
// ------------------------------------------------------------------

// ------------------------------------------------------------------
const name = {
  firstName : "방",
  middleName : "진",
  lastName : "혁"
}
//변수안에 JSON 형식으로 데이터 삽입
// ------------------------------------------------------------------

// ------------------------------------------------------------------
const naver = <a href='https://www.naver.com'>네이버</a>;
//변수안에 태그를 넣는 것 이 가능하다.
// ------------------------------------------------------------------

// ------------------------------------------------------------------
const testImage = <img src={name.firstName}></img>;
//어트리뷰트 속성안에 중괄호로 주입이 가능하다.
// ------------------------------------------------------------------

// ------------------------------------------------------------------
const parentElement = (
  <div>
      <h1>부모</h1>
      <div>
        <h2>자식</h2>
      </div>
  </div>
)
//변수안에 부모와 자식태그를 삽입할 수 있다.
// ------------------------------------------------------------------

// ------------------------------------------------------------------
const oppElement = (
  <h1 className='greeting'>
        oppElement1      
    </h1>
)
//태그를 삽입하여 생성
// ------------------------------------------------------------------

// ------------------------------------------------------------------
const oppElementTwo = React.createElement(
  'h1',
  {className : 'greeting'},
  'oppElementTwo'
  )
  //CreateElement객체생성 엘리먼트 요소를 생성하여 작성
// ------------------------------------------------------------------

// ------------------------------------------------------------------
function tick(){
  const element = (
    <div>
        <h3>뚝딱 거리는 시계</h3>
        <h3>{new Date().toLocaleTimeString()}</h3>
    </div>
  );
  // root.render(element);
};
// 시계함수 날짜 객체의 시간을 가져온다.
// root.render로 생성된엘리먼트를 렌더링 시켜준다
// root.render가 위아래로 실행되서 시계가 먼저 보여진다.
// 실제로는 root.render는 한 번만 호출해야한다.
// ------------------------------------------------------------------

// ------------------------------------------------------------------
function Welcome(props){
  return <h3>welcome함수 출력 {props.name}</h3>
}
//porps는 속성을 나타내는 데이터이다 객체인자를 받는다.
//함수를 적어줄 때는 맨앞글자는 대문자여야 인식

const welcomeData = <Welcome name="방진혁" />;
//컴포넌트 출력시 맨앞 글자는 대문자로 해야한다

// ------------------------------------------------------------------

// ------------------------------------------------------------------
function formatDate(date) {
  return date.toLocaleDateString();
}
//날짜를 가져오는 리턴시키는 함수 

function Avatar(props){
  return (
    <img className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}/>
  )
}
//현재Author에 있는 정보를 출력하는 Avatar 함수 


function UserInfo(props){
  return(
    <div className="UserInfo">
      <Avatar author={props.author}/>
      {/* props로 받은 데이터는 넘어온 속성값의 명칭으로 받는다 출력시 주의 */}
      <div className="UserInfo-name">
         {props.author.name}
      </div>
    </div>
     )
}
//유저의 정보를 출력하는 부분 

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author={props.author} />
      {/* 넘어가는 값이 author면 객체이름이 author로 바뀌고 name이면 name으로 바뀐다 주의*/}
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
//컴포넌트를 2개로 쪼개서 함수가 가벼워짐

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
//출력할 정보 

// ------------------------------------------------------------------

// ------------------------------------------------------------------

class Clock extends React.Component{

  constructor(props){
    super(props);
    this.state = {date : new Date()};
  }
  //클래스는 컴포넌트는 항상 props를 기본으로 constructor 생성해햐한다.

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  //해당 1초마다 콜백 함수 호출 (1초마다 새로운 시간을 설정한다고 보면된다.)
  // this.props가 React의 스스로 설정되고 this.state가 특수한 의미가 있지만, 타이머 ID 와 같은
  //데이터 흐름 안에 포함되지 않는 어떤 항목을 보관할 필요가 있다면 자유롭게 클래스에 수동으로 
  //부갖거인 필들르 추가해도 된다.
    
  }
  //마운트 DOM이 렌더링 될 때 마다 설정

  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  //언마운트 DOM이 삭제 될 대 마다 헤체,삭제
  //타이머를 분해한다.

  tick(){
    this.setState({
      date : new Date()
    });
  }
  //컴포넌트 로컬 state를 업데이트 하기 위해 this.setState()를 사용한다.

  render(){
    return (
      <div>
        <h1>뚝따거리는 시계 자동화</h1>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
      </div>
    )
  }
}


// ------------------------------------------------------------------
root.render(
  <React.StrictMode>
    <h1>Hello, {formatName(name)}</h1>
    {/* 이름 출력 구간 */}
    {naver}
    {/* a태그 네이버 이동 */}
    {testImage}
    {/* 이미지 중괄호 삽입 */}
    {parentElement}
    {/* 변수안에 부모, 자식 태그 삽입 출력 */}
    {oppElement}
    {/* 태그를 삽입하는 방식 */}
    {oppElementTwo}
    {/* CreateElement객체생성 CreateElement로 생성하는 방식 */}
    {welcomeData}
    {/* 컴포넌트를 호출하여 출력 */}
    <div>
        <Welcome name="이상준"/>
        <Welcome name="정재하" />
        <Welcome name="신정훈" />
    </div>
    {/* 컴포넌트를 여러번 렌더링하는 컴포넌트를 만들 수 있다.  */}
    <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />
    {/* 컴포넌트 를 쪼개서 출력 */}
    <Clock />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// setInterval(tick,  1000);
//뚝딱거리는 시계를 위한 콜백 함수  1초마다 tick함수 호출
//clearInterval();
//메모리 누수 방지 타이머를 종료시킨다.