import React, { useEffect, useState } from "react";
import axios from "axios";
import { db, auth } from "../Auth/FirebaseAuth";
import { getRandomAPIKey } from "../Context/getRandom";
import { doc, getDoc } from "firebase/firestore";
import "../styles/SavedRecipe.css";
import { Link } from "react-router-dom";

function SavedRecipe() {
  const currentUser = auth.currentUser; // Get the current user from your authentication context
  const [savedRecipes, setSavedRecipes] = useState([]);
  const apik1 = getRandomAPIKey();

  // Use useEffect to fetch saved recipes from Firestore
  useEffect(() => {
    if (currentUser) {
      const userId = currentUser.uid;
      const userDocRef = doc(db, "users", userId);

      getDoc(userDocRef)
        .then((doc) => {
          if (doc.exists) {
            const savedRecipeIds = doc.data().savedRecipes || [];
            const promises = savedRecipeIds.map((recipeId) => {
              // Make Axios API call to Spoonacular or your preferred API
              return axios.get(
                `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${apik1}`
              );
            });

            Promise.all(promises)
              .then((responses) => {
                // Handle the API responses and store them in the state
                const savedRecipesData = responses.map(
                  (response) => response.data
                );
                setSavedRecipes(savedRecipesData);
               // console.log("saved : ", savedRecipes);
              })
              .catch((error) => {
                console.error("Error fetching saved recipes:", error);
              });
          } else {
            console.error("User document does not exist.");
          }
        })
        .catch((error) => {
          console.error("Error getting user document:", error);
        });
    }
  }, [currentUser]);
  return (
    <>
      <div className="mainsave">
        <h2 className="saveheader">Saved Recipes</h2>
        <div className="containersave">
          {savedRecipes.map((recipe) => (
            <div key={recipe.id} className="cardsave">
              <div className="imgBx">
                <img src={recipe.image} alt="" />
              </div>
              <div className="detailssave">
                <div className="contentsave">
                  <h2>
                    {recipe.title}
                    <br />
                  </h2>
                  <h5>
                    Dish Type :{" "}
                    {recipe.vegetarian ? "Vegitarian" : "Non-Vegitarian"}
                  </h5>
                  <h5>Time To Prepare : {recipe.readyInMinutes}Minutes</h5>

                  <Link to={`/recipeshow/${recipe.id.toString()}`} id="seemore">
                    <button className="savebutton">
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <span>See Recipe</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SavedRecipe;
