import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import UserContextProvider from "./contexts/UserContext";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Posts from "./components/Posts";
function App() {
  return (
    <Router>
      <div className="App">
        <UserContextProvider>
          <Navbar></Navbar>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
       
        </UserContextProvider>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/posts" exact component={Posts} />
      </div>
    </Router>
  );
}

export default App;
