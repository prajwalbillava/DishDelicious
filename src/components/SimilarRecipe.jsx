import React, { useState, useEffect } from "react";
import axios from "axios";
import SimilarCard from "./SimilarCard";
import "../styles/SimilarRecipe.css";

function SimilarRecipe({ RecipeId }) {
  const [similar, setSimilar] = useState([]);
  useEffect(() => {
    console.log("info page running");
    const handleSearchSubmit = async () => {
      //event.preventDefault();
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${RecipeId}/similar?includeNutrition=false&apiKey=6f9148c7b54c4d57a5806ff1e61c3c0e`
        );
        console.log("similar", response.data);
        setSimilar(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleSearchSubmit();
  }, []);
  return (
    <>
      <div className="card-list">
        {similar.map((card) => (
          <SimilarCard
            key={card.id}
            id={card.id}
            title={card.title}
            imageUrl={card.sourceUrl}
            readyInMin={card.readyInMinutes}
          />
        ))}
      </div>
    </>
  );
}

export default SimilarRecipe;
