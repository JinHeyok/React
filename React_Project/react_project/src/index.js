import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './Member/Main';
import Login from './Member/Login';
import Logout from './Member/Logout';
import Store from './Store/store';
import Headers from './Global/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));

var idCheck = sessionStorage.getItem("user");

var option = {
    path : "",
    text : "",
}

if(idCheck === null || idCheck === undefined || idCheck === ""){
    option.path = "/login";
    option.text = "로그인 하기";
}else{
    option.path = "/logout";
    option.text = "로그아웃 하기";
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Headers option={option}/>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        {/* main 화면  */}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/store' element={<Store  option={option}/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
