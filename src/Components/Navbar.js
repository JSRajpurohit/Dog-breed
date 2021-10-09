import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" >
            <Link to="/" className="navlink">Dog Page</Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                <Link to="/" className="navlink">Home Page</Link>
              </a>
              <a className="nav-link active" aria-current="page" href="#">
                <Link to="/Random" className="navlink">Random page</Link>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
