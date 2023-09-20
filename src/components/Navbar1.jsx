import React, { useState } from "react";
import "../styles/Navbar1.css";

import { Link } from "react-router-dom";

import axios from "axios";

function Navbar1() {
  return (
    <>
      <div className="navflex">
        <div className="wrapper">
          <nav>
            <input type="checkbox" id="show-search" />
            <input type="checkbox" id="show-menu" />
            <label htmlFor="show-menu" className="menu-icon">
              <i className="fas fa-bars"></i>
            </label>
            <div className="content">
              <div className="logo">
                <a href="#">Dish Delicious</a>
              </div>
              <ul className="links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login1">Login/Rigster</Link>
                </li>
                <li>
                  <a href="#" className="desktop-link">
                    Features
                  </a>
                  <input type="checkbox" id="show-features" />
                  <label htmlFor="show-features">Features</label>
                  <ul>
                    <li>
                      <Link to="/login1">Login</Link>
                    </li>
                    <li>
                      <Link to="/signup">signUp</Link>
                    </li>
                    <li>
                      <a href="#">Drop Menu 3</a>
                    </li>
                    <li>
                      <a href="#">Drop Menu 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="desktop-link">
                    Services
                  </a>
                  <input type="checkbox" id="show-services" />
                  <label htmlFor="show-services">Services</label>
                  <ul>
                    <li>
                      <Link to="/recipesearch">Search Recipe</Link>
                    </li>
                    <li>
                      <Link to="/savedrecipe">Saved Recipes</Link>
                    </li>
                    <li>
                      <a href="#">Drop Menu 3</a>
                    </li>
                    <li>
                      <a href="#">Drop Menu 4</a>
                    </li>
                    {/*<li>
                      <a href="#" className="desktop-link">
                        More Items
                      </a>
                      <input type="checkbox" id="show-items" />
                      <label htmlFor="show-items">More Items</label>
                      <ul>
                        <li>
                          <a href="#">Sub Menu 1</a>
                        </li>
                        <li>
                          <a href="#">Sub Menu 2</a>
                        </li>
                        <li>
                          <a href="#">Sub Menu 3</a>
                        </li>
                      </ul>
  </li>*/}
                  </ul>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <Link to="/profile" className="profileman">
              <i className="fas fa-user"></i>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar1;
