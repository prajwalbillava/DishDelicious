import React, { useEffect, useId, useState } from "react";
import { useParams } from "react-router-dom";
import { auth, db } from "../Auth/FirebaseAuth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  arrayUnion,
  setDoc,
} from "firebase/firestore";
import axios from "axios";
import "../styles/ShowDetail.css";
import SimilarRecipe from "./SimilarRecipe";
import { Link } from "react-router-dom";
import { getRandomAPIKey } from "../Context/getRandom";

function ShowDetail() {
  const { id } = useParams();
  const [currentId, setCurrentId] = useState(id);
  const [Recipe, setRecipe] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const apik1 = getRandomAPIKey();
  //dotenv.config({ path: "../../.enav" });
  const linkStyle = {
    textDecoration: "none", // Example style properties
    color: "white",
  };

  const handleSearchSubmit = async () => {
    //event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${currentId}/information?includeNutrition=false&apiKey=${apik1}`
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

  const handleSaveRecipe = async () => {
    try {
      // Check if a user is currently authenticated
      const user = auth.currentUser;
      console.log("user data", user);
      if (user) {
        // Get the user's unique ID
        const userId = user.uid;
        console.log("User UID:", userId);

        // Reference to Firestore collection for user data
        const firestore = db;
        const userDocRef = doc(db, "users", userId);

        // Update the user's document with the recipe number
        await updateDoc(userDocRef, {
          savedRecipes: arrayUnion(`${currentId}`),
        });

        setIsSaved(true);
      } else {
        // Handle the case when the user is not authenticated
        // You can show a message or redirect to the login page
      }
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
  };
  function handleHidePopup() {
    setIsSaved(false);
  }

  return (
    <>
      <div className="showmain">
        <h1
          style={{ fontSize: "40px", fontWeight: "900", margin: "20px auto" }}
        >
          {Recipe?.title}
        </h1>
        <img src={Recipe?.image}></img>
        {/* <p>{Recipe?.instructions}</p>*/}
        {Recipe?.vegetarian ? (
          <div className="small-box green">Vegetarian Dish</div>
        ) : (
          <div className="small-box red">Non-Vegetarian Dish</div>
        )}
        <h2>Ingridients : </h2>
        <ul className="ingri">
          {Recipe?.extendedIngredients.map((item) => {
            return (
              <li key={item.id}>
                <h4 style={{ fontSize: "30px", fontWeight: "900" }}>
                  {item.original}
                </h4>
                <div style={{ display: "flex", fontSize: "20px" }}>
                  Quantity :
                  <h3 style={{ fontSize: "20px" }}>
                    {item?.measures?.metric?.amount}
                    {item?.measures?.metric?.unitShort}
                  </h3>
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
          <button className="buttonA" onClick={handleSaveRecipe}>
            Save Recipe
          </button>
          <button className="buttonA">
            <Link to={`/recipepdf/${currentId}`} style={linkStyle}>
              Genrate Shopping List
            </Link>
          </button>
          <button className="buttonA">Order Ingridients</button>
        </div>
      </div>
      <h3>Similar Recipes</h3>
      <SimilarRecipe RecipeId={id} />
      {isSaved && (
        <>
          <div id="overlay" className="overlay2"></div>
          <div className="popup">
            <h2>Recipe Saved Successfully</h2>
            <p>You can check saved recipe in profile</p>
            <span className="close" onClick={handleHidePopup}>
              &times;
            </span>
          </div>
        </>
      )}
    </>
  );
}

export default ShowDetail;
