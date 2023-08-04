import React from "react";
import "../styles/Errorpage.css";

function Errorpage(props) {
  const LinkComponent = props.linkComponent;
  return (
    <>
      <div className="mainbox">
        <div className="err">4</div>
        <i className="far fa-question-circle fa-spin"></i>
        <div className="err2">4</div>
        <div className="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go <LinkComponent to="/">Home</LinkComponent> and try from
            there.
          </p>
        </div>
      </div>
    </>
  );
}

export default Errorpage;
