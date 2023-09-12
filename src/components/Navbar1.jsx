import React, { useState } from "react";
import "../styles/Navbar1.css";

import { Link, Outlet } from "react-router-dom";
import RecipeShow from "./RecipeShow";
import axios from "axios";

function Navbar1() {
  const [showComponent, setShowComponent] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=5beaafeb&app_key=d9a466ac0ebd5e8176a5a7b03a844bca
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&maxFat=25&number=21&apiKey=6f9148c7b54c4d57a5806ff1e61c3c0e`
      );
      setRecipes(response.data.results);
      console.log(response);
      setShowComponent(true);
    } catch (error) {
      console.log(error);
    }
  };
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
                      <a href="#">Drop Menu 2</a>
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
            <label htmlFor="show-search" className="search-icon">
              <Link to="/profile" className="profileman">
                <i className="fas fa-user"></i>
              </Link>
            </label>
          </nav>
        </div>
        {showComponent && <RecipeShow recipe1={recipes} />}
      </div>
    </>
  );
}

export default Navbar1;
