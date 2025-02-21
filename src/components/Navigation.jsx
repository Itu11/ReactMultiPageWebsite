import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
          Nwu It Walkin Website
          </Link>
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/student" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/student">
                Student
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/staff" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/staff">
                Staff
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/bookin" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/bookin">
                BookIn
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                  Contact
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
