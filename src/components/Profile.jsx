import React, { useState } from "react";
import "../styles/Profile.css";
import { useSelector } from "react-redux";
import { useAuth } from "../Context/AuthContext";

function Profile() {
  const { currentUser, logout } = useAuth();
  const user = useSelector((state) => state.user);
  console.log(user);
  const { email, username } = user;
  const name1 = extractNameFromEmail(email);

  function extractNameFromEmail(email) {
    // Remove all numbers from the email address
    var nameWithoutNumbers = email.replace(/[0-9]/g, "");

    // Extract the name part before the '@' symbol
    var name = nameWithoutNumbers.split("@")[0];

    return name;
  }

  return (
    <>
      <div className="content-profile-page">
        <div className="profile-user-page cardp">
          <div className="img-user-profile">
            <img
              className="profile-bgHome"
              src="https://media.istockphoto.com/id/1403973419/photo/table-top-of-food-spread-on-table.webp?b=1&s=612x612&w=0&k=20&c=OSi7adYFKTNCUil3eTUoTWzKk5vPjeeTMXMZhXGrzxc="
            />
            <img
              className="avatar"
              src="data:image/png;base64,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"
              alt="jofpin"
            />
          </div>

          <div className="user-profile-data">
            <h1>{name1}</h1>
            <p>{currentUser.email}</p>
          </div>
          <div className="description-profile">
            Discover new flavors and plan your culinary journey with our recipe
            search and meal planning app.
          </div>
          <ul className="data-user">
            <li>
              <a>
                <strong>0</strong>
                <span>Saved Recipe</span>
              </a>
            </li>
            <li>
              <a>
                <strong>0</strong>
                <span>shopping list</span>
              </a>
            </li>
            <li>
              <a>
                <strong>0</strong>
                <span>ordered</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Profile;
