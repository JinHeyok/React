import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom"; ////////
import Home from "./components/Home";
import Member from "./components/Member";
import Login from "./components/Login";

class App extends Component {
  render() {
    //

    return (
      <Router>
        {/*  주의  */}
        <NavLink to="/">home</NavLink>
        <Link to="/member">member</Link>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/member" element={<Member />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
