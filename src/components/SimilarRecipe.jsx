import React, { useState, useEffect } from "react";
import axios from "axios";
import SimilarCard from "./SimilarCard";
import "../styles/SimilarRecipe.css";
import { getRandomAPIKey } from "../Context/getRandom";

function SimilarRecipe({ RecipeId }) {
  const [similar, setSimilar] = useState([]);
  const apik1 = getRandomAPIKey();
  useEffect(() => {
    console.log("info page running");
    const handleSearchSubmit = async () => {
      
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${RecipeId}/similar?includeNutrition=false&apiKey=${apik1}`
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
