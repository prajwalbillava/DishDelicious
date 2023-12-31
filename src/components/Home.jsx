import React, { useState, useEffect } from "react";
import { db } from "../Auth/FirebaseAuth";
import { getDocs, collection } from "firebase/firestore";
import { useAuth } from "../Context/AuthContext";
import "../styles/HomeCard.css";
import HomeCard from "./HomeCard";

import "../styles/Home.css";

function Home() {
  const [name, setname] = useState([]);
  const [error, setError] = useState("");
  const nameCollection = collection(db, "auth");
  const { currentUser } = useAuth();

  //const email = currentUser.email;

  /*useEffect(() => {
    const getNameList = async () => {
      try {
        const data = await getDocs(nameCollection);
        const fildata = data.docs.map;
        //console.log(data);
        //store.dispatch(setUser({ email, name1 }));
      } catch (err) {
        console.log(err);
      }
    };
    getNameList();
  }, []);*/

  return (
    <>
      <div className="video-container">
        <img
          src="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          className="faded-image"
        ></img>
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

      <div className="wrapper1">
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
        <div className="containerh">
          <h1 className="title">Our Services</h1>
          <div className="inner-wrapper">
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
    </>
  );
}

export default Home;
