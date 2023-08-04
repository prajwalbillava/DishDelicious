import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import "../styles/ShowDetail.css";
import SimilarRecipe from "./SimilarRecipe";

function ShowDetail() {
  const { id } = useParams();
  const [currentId, setCurrentId] = useState(id);
  const [Recipe, setRecipe] = useState(null);
  //dotenv.config({ path: "../../.enav" });

  const handleSearchSubmit = async () => {
    //event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${currentId}/information?includeNutrition=false&apiKey=6f9148c7b54c4d57a5806ff1e61c3c0e`
      );
      console.log(response);
      setRecipe(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("info page running");
    //refreshpage();

    handleSearchSubmit();
  }, []);

  useEffect(() => {
    setRecipe(null);
    if (id !== currentId) {
      setCurrentId(id);
    }
    handleSearchSubmit();
  }, [id, currentId]);

  return (
    <>
      <div className="showmain">
        <h1 style={{ fontSize: "40px", fontWeight: "900" }}>{Recipe?.title}</h1>
        <img src={Recipe?.image}></img>
        {/* <p>{Recipe?.instructions}</p>*/}
        {Recipe?.vegetarian ? (
          <div className="small-box green">Vegetarian Dish</div>
        ) : (
          <div className="small-box red">Non-Vegetarian Dish</div>
        )}
        <h2>Ingridients : </h2>
        <ul>
          {Recipe?.extendedIngredients.map((item) => {
            return (
              <li key={item.id}>
                <h4 style={{ fontSize: "30px", fontWeight: "900" }}>
                  {item.name}
                </h4>
                <div style={{ display: "flex", fontSize: "20px" }}>
                  Quantity :
                  <h3 style={{ fontSize: "20px" }}>{item.original}</h3>
                </div>
              </li>
            );
          })}
        </ul>
        <hr style={{ height: "10px", color: "black" }} />
        <h2>Instruction : </h2>
        <div
          style={{ fontSize: "20px", fontWeight: "600", margin: "0 10px" }}
          dangerouslySetInnerHTML={{ __html: Recipe?.instructions }}
        ></div>
        ;
        <hr />
        <a
          className="navlink"
          href={Recipe?.spoonacularSourceUrl}
          target="_blank"
        >
          Click here for more information
        </a>
        <hr />
        <div className="buttonMain">
          <button className="buttonA">Save Recipe</button>
          <button className="buttonA">Genrate Shopping List</button>
          <button className="buttonA">Order Ingridients</button>
        </div>
      </div>
      <h3>Similar Recipes</h3>
      <SimilarRecipe RecipeId={id} />
    </>
  );
}

export default ShowDetail;
