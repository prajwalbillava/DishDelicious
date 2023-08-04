import React from "react";
import "../styles/SimilarRecipe.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SimilarCard({ id, title, imageUrl, readyInMin }) {
  console.log("recipe", id);
  const navigateTo1 = useNavigate();

  function navigateTo() {
    navigateTo1(`/recipeshow/${id.toString()}`);
  }

  return (
    <>
      <div className="card">
        <div className="card-content">
          <h3>{title}</h3>
          <p>Minutes To Prepare : {readyInMin}</p>
          {/*<a href={imageUrl} target="_blank">
            More Detail
  </a>*/}
        </div>
        {/* <Link to={`/recipeshow/${id.toString()}`}>More Detail</Link>*/}
        <button onClick={navigateTo} className="simButton">
          {" "}
          <span className="simSpan">See Recipe</span>
        </button>
      </div>
    </>
  );
}

export default SimilarCard;
