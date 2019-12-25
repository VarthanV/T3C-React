import React, { useState } from "react";
import { authRoute } from "../helperconstants";
import {useHistory} from 'react-router-dom';
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const history= useHistory();
 
  const handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("username", name);
    formData.append("email", email);
    formData.append("password", password);
    fetch(authRoute, {
      method: "post",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        if(data['registered']){
          history.push('/login');
        }
      })
      .catch(err => setError(true));
  };
  return (
    <div>
      <div className=" container signup-card">
        <h4 className="signup-header"> SignUp ! </h4>
        {error === true ? (
          <p className="alert alert-danger" role="alert">
            {" "}
            Email or Username already exist,Please login with your credentials{" "}
          </p>
        ) : (
          <div> </div>
        )}
        <form onSubmit={e => handleSubmit(e)}>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your Email"
              autoComplete="off"
              required
            ></input>{" "}
            <br></br>
            <input
              className="form-control"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your Name"
              autoComplete="off"
              
              required
            ></input>
            <br></br>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={e => setPassowrd(e.target.value)}
              placeholder="Enter your password"
              autoComplete="off"
            ></input>
            <br></br>
            <input
              className="form-control"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              autoComplete="off"
              required
            ></input>
            <br></br>
            <button type="submit" className="btn btn-primary">
              {" "}
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
