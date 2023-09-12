import React, { useState, useEffect } from "react";
import { db } from "../Auth/FirebaseAuth";
import { getDocs, collection } from "firebase/firestore";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
//import { setUser } from "../redux/userSlice";
//import store from "../redux/store";

function Home() {
  const [name, setname] = useState([]);
  const [error, setError] = useState("");
  const nameCollection = collection(db, "auth");
  const { currentUser, logout } = useAuth();
  const navigateTo = useNavigate();
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

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigateTo("/login1");
    } catch {
      setError("Failed to logout");
    }
  }

  
  return (
    <>
      <div className="video-container">
        <video
          style={{ height: "10%", width: "100%" }}
          className="filtered-video"
          autoPlay
          loop
          muted
        >
          <source src="src\assets\homepagevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

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
      

      <h2>Find your perfect meal with our recipe search and planning app</h2>
      <div className="cardsHome">
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
      </div>

      <button onClick={handleLogout} className="loginbutton">
        Logout
      </button>
    </>
  );
}

export default Home;
