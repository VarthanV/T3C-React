import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
export default function Navbar() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-style">
        <button
          className="navbar-toggler mr-auto"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span
            className="fa fa-bars navbar-toggler-icon mt-2"
            style={{ color: "white" }}
          ></span>
        </button>
        <ul className="navbar-nav mr-auto text-center">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/home"
              style={{ fontSize: "20px", fontWeight: "600", color: "white" }}
            >
              Tier 3 Coders
            </Link>
          </li>
        </ul>
        <div className="collapse navbar-collapse pl-5" id="basicExampleNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="" className="nav-link link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link link">
                About Us
              </Link>
            </li>
          </ul>
          {user.token !== null || localStorage.getItem("token") !== null ? (
            <ul className="navbar-nav">
              <div>
                <img
                  src="https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png"
                  className="mt-0"
                  height="40"
                  width="40"
                  alt="Avatar Img"
                />
              </div>
              <li className="nav-item">
                <Link to="" className="nav-link link">
                  <i className="fab fa-github"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link link">
                  <i className="fa fa-sign-out-alt"></i>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="" className="nav-link link">
                  <i className="fab fa-github"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link link">
                  <i className="fa fa-user-plus"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link link">
                  <i className="fa fa-power-off"></i>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}
