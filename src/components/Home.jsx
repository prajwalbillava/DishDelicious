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
        <img
          src="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          className="faded-image"
        ></img>

        {/*<div className="titlemain text-overlay">
          <h1 style={{ marginTop: "10px" }} className="dish">
            DISH
          </h1>
          <h1 style={{ marginTop: "10px" }} className="dish">
            DELICIOUS
          </h1>
  </div>*/}
      </div>
      <div className="maintitle">
        <div className="waviy">
          <span style={{ "--i": 1 }}>D</span>
          <span style={{ "--i": 2 }}>I</span>
          <span style={{ "--i": 3 }}>S</span>
          <span style={{ "--i": 4 }}>H</span>
        </div>
        <div className="waviy">
          <span style={{ "--i": 5 }}>D</span>
          <span style={{ "--i": 6 }}>E</span>
          <span style={{ "--i": 7 }}>L</span>
          <span style={{ "--i": 8 }}>I</span>
          <span style={{ "--i": 9 }}>C</span>
          <span style={{ "--i": 10 }}>I</span>
          <span style={{ "--i": 11 }}>O</span>
          <span style={{ "--i": 12 }}>U</span>
          <span style={{ "--i": 13 }}>S</span>
        </div>
      </div>

      {error && alert(error)}

      <div class="wrapper1">
        <h1 className="animh1">
          <span>Find </span>
          <span>your </span>
          <span>perfect </span>
          <span>meal </span>
          <span>with </span>
          <span>our </span>
          <span>recipe </span>
          <span>search </span>
          <span>app.</span>
        </h1>
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
