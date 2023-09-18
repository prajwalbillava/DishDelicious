import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShowContext } from "../Context/ShowContext";
import "../styles/Recipeshow.css";
import axios from "axios";
import ShowDetail from "./ShowDetail";
import { Link } from "react-router-dom";
import { getRandomAPIKey } from "../Context/getRandom";

function RecipeShow({ recipe1 }) {
  //const recipe = recipe1;
  const { recipes, setRecipes } = useContext(ShowContext);

  const [searchTerm, setSearchTerm] = useState("");
  const apik1 = getRandomAPIKey();
  const [clickID, setclickID] = useState(0);
  const [showDetail, setshowDetail] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  {
    /*useEffect(() => {
    setRecipes(recipe1);
  }, []);*/
  }

  /*const itemClick = (id) => {
    setclickID(id);
    setshowDetail(true);
  };*/
  /*useEffect(() => {
    setshowDetail(true);
  }, [clickID]);*/

  const handleClick = (id) => {
    setclickID(id);
    setshowDetail(true);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&maxFat=25&number=21&apiKey=${apik1}`
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.log(error);
      alert("Something went wrong , please try later ...!");
    }
  };
  return (
    <>
      {/*!showDetail ? (*/}
      <>
        <div className="main">
          <form className="head" onSubmit={handleSearchSubmit}>
            <div className="input-container">
              <input
                placeholder="Search recipe here...."
                type="text"
                onChange={handleSearchChange}
              />
              <button className="invite-btn" type="submit">
                SEARCH
              </button>
            </div>
          </form>
          <h1>Result : </h1>
          <ul className="cards">
            {recipes &&
              recipes?.map((recipe) => (
                <li className="cards_item" key={recipe.id}>
                  <div className="cardR">
                    <div className="card_image">
                      <img src={recipe.image} alt="Recipe Image" className="card_InsideImage"/>
                    </div>
                    <div className="card_content">
                      <h2 className="card_title">{recipe.title}</h2>
                      <h2 className="card_text">
                        {`FAT : ${recipe.nutrition.nutrients[0].amount} grams`}
                      </h2>
                      <Link
                        to={`/recipeshow/${recipe.id.toString()}`}
                        className="btn card_btn"
                      >
                        See Recipe
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </>
      {/*} ) : (
        <ShowDetail ItemId={clickID} />
     )*/}
    </>
  );
}

export default RecipeShow;
