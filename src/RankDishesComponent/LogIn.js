import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './Rankdishescsscomponent/LogIn.css';
import data from './users.json';
import {useState} from 'react';
import Tabs from './Tabs';
import { useNavigate } from "react-router-dom";

export default function (props) {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();
  function searchuser(){
      data.map((user)=> {
                if(user.username===username && user.password===password)
                {
                  
                  return(navigate("/Tabs"));
                }
      })
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={searchuser}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Username"
              onChange={event => setusername(event.target.value)}
              value={username}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={event => setpassword(event.target.value)}
              value={password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}


