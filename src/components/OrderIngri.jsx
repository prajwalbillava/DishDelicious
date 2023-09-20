import React, { useState, useEffect } from "react";
import { getRandomAPIKey } from "../Context/getRandom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/order.css";
import "../styles/ShowDetail.css";
import PlaceOrder from "./PlaceOrder";

function OrderIngri() {
  const [ingriDetail, setingriDetail] = useState(null);
  const [ingridients, setIngridients] = useState([]);
  const [total, setTotal] = useState(0);
  const apik1 = getRandomAPIKey();
  const { id } = useParams();
  const [showNext, setShowNext] = useState(true);
  const [selected, setSeelected] = useState([]);
  const [grandTotal, setgrandtotal] = useState(0);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleIngredientSelect = (ingredientli) => {
    setSelectedIngredients((prevSelectedIngredients) => {
      if (prevSelectedIngredients.includes(ingredientli)) {
        return prevSelectedIngredients.filter((item) => item !== ingredientli);
      } else {
        return [...prevSelectedIngredients, ingredientli];
      }
    });
    //console.log("select", selectedIngredients);
    setTotal(calculateTotalCost());
  };

  const ingridetail = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/priceBreakdownWidget.json?apiKey=${apik1}`
      );
      setingriDetail(response.data);
      setIngridients(response.data.ingredients);

      console.log("orderingri : ", response);
    } catch (error) {
      console.log(error);
      alert("Something went wrong , please try later ...!");
    }
  };
  const calculateTotalCost = () => {
    let totalCost = 0;

    for (const ingredient of selectedIngredients) {
      totalCost += ingredient.price;
    }

    return totalCost;
  };

  useEffect(() => {
    ingridetail();
  }, []);

  

  function handleClick() {
    setSeelected(selectedIngredients);
    setgrandtotal(total);
    setShowNext(false);
  }

  return (
    <>
      {showNext ? (
        <div className="ordermain">
          <h2>Select Ingredients</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th style={{ textAlign: "right" }}>Price</th>
                <th style={{ textAlign: "right" }}>Select</th>
              </tr>
            </thead>
            <tbody>
              {ingridients?.map((ingredient, index) => (
                <tr key={index}>
                  <td>{ingredient?.name}</td>
                  <td style={{ textAlign: "right" }} s>
                    ${ingredient?.price.toFixed(2)}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <input
                      type="checkbox"
                      onChange={() => handleIngredientSelect(ingredient)}
                      checked={selectedIngredients.includes(ingredient)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total Cost: ${total}</p>
          <p>
            Total Cost Per Serving: $
            {ingriDetail?.totalCostPerServing.toFixed(2)}
          </p>
          <button className="buttonA" onClick={handleClick}>
            Order
          </button>
        </div>
      ) : (
        <PlaceOrder selected={selected} total={grandTotal} />
      )}
    </>
  );
}

export default OrderIngri;
