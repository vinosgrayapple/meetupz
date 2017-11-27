import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              Meetups
            </a>
            <a href="/" data-activates="main-menu" className="button-collapse show-on-large">
              <i className="fa fa-bars"></i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
            <ul className="side-nav" id="main-menu">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab">
                <a href="#test1">Test 1</a>
              </li>
              <li className="tab">
                <a className="active" href="#test2">
                  Test 2
                </a>
              </li>
              <li className="tab disabled">
                <a href="#test3">Disabled Tab</a>
              </li>
              <li className="tab">
                <a href="#test4">Test 4</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>;
  }
}
export default Navbar;
