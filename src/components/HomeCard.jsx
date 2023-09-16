import React from "react";
import "../styles/HomeCard.css";
import { Link } from "react-router-dom";

function HomeCard(props) {
  const title = props.title;
  const id = props.id;
  let imgUrl = "";
  const btntext = props.btntext;
  let displaycontent = "";
  let url = "";
  const imgary = [
    "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  ];
  const content = [
    "Use our powerful recipe search feature to discover a wide variety of delicious dishes from around the world, tailored to your taste and dietary preferences.",
    "Easily save your favorite recipes to your personal collection and access them whenever you want, so you can enjoy your most loved dishes anytime.",
    "Create a convenient shopping list with all the required ingredients , making your grocery shopping hassle-free and organized.",
  ];
  if (id === 1) {
    displaycontent = content[0];
    url = "recipesearch";
    imgUrl = imgary[0];
  } else if (id == 2) {
    displaycontent = content[1];
    url = "savedrecipe";
    imgUrl = imgary[1];
  } else {
    displaycontent = content[2];
    url = "recipesearch";
    imgUrl = imgary[2];
  }

  return (
    <>
      <div class="cardhome" id={id}>
        <div class="inner-card">
          <div class="img-wrapper">
            <img src={imgUrl} alt="" />
          </div>
          <div class="contenthome">
            <h1>{title}</h1>
            <p>{displaycontent}</p>
          </div>
          <div class="btn-wrapper">
            <button
              class="view-btn"
              data-src="https://source.unsplash.com/collection/190727/900x600"
            >
              <Link to={`/${url}`} className="cardA">
                {btntext}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCard;
