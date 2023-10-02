import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container1">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About Us</h6>
              <p className="text-justify">
                Welcome to <i>Dish Delicious</i>, your go-to resource for all
                your recipe search and ingridients ordering needs. Our team of
                experienced chefs, nutritionists, and software developers have
                come together to create a user-friendly platform that simplifies
                the meal planning process and provides access to a wide range of
                recipes to suit every taste and dietary preference. We are
                committed to providing high-quality, accurate, and up-to-date
                nutritional information for every recipe, so you can be
                confident in the meals you create. Thank you for choosing Dish
                Delicious, and we hope you enjoy your experience with us.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Services</h6>
              <ul className="footer-links">
                <li>
                  <Link to="/recipesearch">Search Recipe</Link>
                </li>
                <li>
                  <Link to="/savedrecipe">Save Recipe</Link>
                </li>
                <li>
                  <Link to="/recipesearch">Genrate Shopping List</Link>
                </li>
                <li>
                  <Link to="/recipesearch">Order Ingridients</Link>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">contact Us</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/login1">Login</Link>
                </li>
                <li>
                  <Link to="/signup">SignUp</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container1">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Made with ❤️ by
                <a href="https://github.com/prajwalbillava"> Prajwal</a>
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="dribbble"
                    href="https://github.com/prajwalbillava"
                    target="_blank"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/prajwalbirwaz/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
