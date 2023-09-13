import React, { useState, useEffect } from "react";
import { db } from "../Auth/FirebaseAuth";
import { getDocs, collection } from "firebase/firestore";
import { useAuth } from "../Context/AuthContext";
import "../styles/HomeCard.css";
import HomeCard from "./HomeCard";

import "../styles/Home.css";
//import { setUser } from "../redux/userSlice";
//import store from "../redux/store";

function Home() {
  const [name, setname] = useState([]);
  const [error, setError] = useState("");
  const nameCollection = collection(db, "auth");
  const { currentUser } = useAuth();

  const email = currentUser.email;

  useEffect(() => {
    const getNameList = async () => {
      try {
        const data = await getDocs(nameCollection);
        const fildata = data.docs.map;
        console.log(data);
        //store.dispatch(setUser({ email, name1 }));
      } catch (err) {
        console.log(err);
      }
    };
    getNameList();
  }, []);

  return (
    <>
      <div className="video-container">
        <img src={"src/assets/homeimage.avif"} className="faded-image"></img>

        <div className="titlemain text-overlay">
          <h1 style={{ marginTop: "10px" }} className="dish">
            DISH
          </h1>
          <h1 style={{ marginTop: "10px" }} className="dish">
            DELICIOUS
          </h1>
        </div>
      </div>

      {error && alert(error)}

      <div class="wrapper1">
        <h2 className="h2home">
          Find your perfect meal with our recipe search and planning app
        </h2>
        <div class="containerh">
          <h1 class="title">Our Services</h1>
          <div class="inner-wrapper">
            <HomeCard
              id={1}
              title={"Search Recipe"}
              imgUrl={""}
              btntext={"Search Recipe"}
            />
            <HomeCard
              id={2}
              title={"Save Recipe"}
              imgUrl={""}
              btntext={"Saved Recipes"}
            />
            <HomeCard
              id={3}
              title={"Genrate Shopping List"}
              imgUrl={""}
              btntext={"Genrate Shopping List"}
            />
          </div>
        </div>
      </div>
      {/*<div className="cardsHome">
        <div className="cardhome red">
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
        <div className="cardhome blue">
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
        <div className="cardhome green">
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
        <div className="cardhome yellow">
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
  </div>*/}
    </>
  );
}

export default Home;
