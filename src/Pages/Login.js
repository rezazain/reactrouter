import React from "react";
import { Component, Fragment } from "react";
import { Header } from "../Component";
import "./Style/Login.css";

class Login extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h1 className="akun">React Router</h1>
        <div className="Login">
          <div className="property">
            <p className="title">Login Ke React Router v6</p>
            <form>
              <input type="text" placeholder="Username" />
              <br></br>
              <input type="password" placeholder="Password" />
              <div className="Button">
                <button>Login</button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Login;
