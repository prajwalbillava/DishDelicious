import React, { useState } from "react";
import "../styles/PlaceOrder.css";
import "../styles/order.css";

const PlaceOrder = (props) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    phone: "",
    email: "",
    address: "",
    postalCode: "",
  });
  const ingridients = props.selected;
  const total = props.total;
  const [step, setStep] = useState(1);
  const t1 = total + 40;
  // const { fname, phone, address, postalCode } = formData;

  console.log("order data:", ingridients, total);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  //const [postalCode, setPostalCode] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePostalCodeChange = (e) => {
    // Ensure that only numeric values and a maximum length of 5 characters are allowed
    setFormData({
      ...formData,
      postalCode: e.target.value,
    });
  };

  const onsubmit1 = () => {
    setIsSubmit(true);
  };
  function handleHidePopup() {
    setIsSubmit(false);
  }
  return (
    <>
      <div>
        <form id="msform">
          <ul id="progressbar">
            <li className={step === 1 ? "active" : ""}>Account Setup</li>
            <li className={step === 2 ? "active" : ""}>Social Profiles</li>
            <li className={step === 3 ? "active" : ""}>Personal Details</li>
          </ul>

          {step === 1 && (
            <fieldset>
              <h2 className="fs-title">Personal Details</h2>
              <h3 className="fs-subtitle">We will never sell it</h3>
              <input
                type="text"
                name="fname"
                placeholder="Name"
                value={formData.fname}
                onChange={(e) =>
                  setFormData({ ...formData, fname: e.target.value })
                }
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <textarea
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              ></textarea>
              <input
                type="text"
                value={formData.postalCode}
                onChange={handlePostalCodeChange}
                name="postalCode"
                placeholder="Enter Postal Code"
              />
              <input
                type="button"
                name="previous"
                className="previous action-button"
                value="Previous"
                onClick={prevStep}
              />
              <input
                type="button"
                name="next"
                className="next action-button"
                value="Next"
                onClick={nextStep}
              />
            </fieldset>
          )}

          {step === 2 && (
            <div className="ordermain">
              <h2>Ingredients Ordered</h2>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {ingridients?.map((ingredient, index) => (
                    <tr key={index}>
                      <td>{ingredient?.name}</td>
                      <td>${ingredient?.price.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="orderbtn">
                <input
                  type="button"
                  name="previous"
                  className="previous action-button"
                  value="Previous"
                  onClick={prevStep}
                />
                <input
                  type="button"
                  name="next"
                  className="next action-button"
                  value="Next"
                  onClick={nextStep}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <>
              <div class="containerorder">
                <div class="cardorder cart">
                  <label class="titleorder">CHECKOUT</label>
                  <div class="steps">
                    <div class="step">
                      <div>
                        <span>SHIPPING</span>
                        <p>{formData.fname}</p>
                        <p>
                          {formData.address} postal Code:{formData.postalCode}
                        </p>
                        <p>Contact No : {formData.phone}</p>
                      </div>
                      <hr />
                      <div>
                        <span>PAYMENT METHOD</span>
                        <p>Cash On Delivary</p>
                      </div>
                      <hr />
                      <div class="payments">
                        <span>PAYMENT</span>
                        <div class="details">
                          <span>Subtotal:</span>
                          <span>${total}</span>
                          <span>Shipping:</span>
                          <span>$10.00</span>
                          <span>Tax:</span>
                          <span>$30.40</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card checkout">
                  <div class="footer">
                    <label class="price">${t1}</label>
                  </div>
                </div>
              </div>
              <input
                type="button"
                name="previous"
                className="previous action-button"
                value="Previous"
                onClick={prevStep}
              />
              <button
                type="button"
                className="submit action-button"
                onClick={onsubmit1}
              >
                Submit
              </button>
            </>
          )}
        </form>
      </div>
      {isSubmit && (
        <>
          <div id="overlay" className="overlay2"></div>
          <div className="popup">
            <h2>Order Placed Successfully</h2>
            <p>You can check the confirmation of order in your mail.</p>
            <span className="close" onClick={handleHidePopup}>
              &times;
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default PlaceOrder;
