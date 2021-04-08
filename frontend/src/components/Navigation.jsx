import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            React Multi-Page Website
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Login
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/dashboard" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/dashboard">
                  Dashboard
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/add" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/add">
                  Add
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/logout" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);