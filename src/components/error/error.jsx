import React from "react";
import Header from "../blogPage/header/Header";
import "./style.scss";
import Error404 from "../assets/error-404.svg";
const Error = () => {
  return (
    <>
      <Header />
      <div className="error-block">
        <div className="error-message">
          <img src={Error404} alt="" />
          <p className="error-title">Page not found - 404</p>
          <p className="error-subtitle">
            This page not found (deleted or never exists).Try a phrase in
            search box or back to home and start again.
          </p>
          <p className="error-text">TAKE ME HOME!</p>
        </div>
      </div>
    </>
  );
};

export default Error;
