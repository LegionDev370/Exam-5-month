import React from "react";
import "./hero.scss";
import Facebook from "../../assets/facebook.svg";
import Github from "../../assets/girhub.svg";
import Twitter from "../../assets/twitter.svg";
import Linkedn from "../../assets/linkedn.svg";
import { Outlet } from "react-router-dom";
const Hero = () => {
  return (
    <main>
      <div className="container">
        <div className="hero-section">
          <div className="hero-section-block">
            <div className="hero-section-block-left">
              <h2 className="hero-section-block-left-title">What I do!</h2>
              <p className="hero-section-block-left-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                aliquet, orci in bibendum luctus, turpis ante pretium velit, eu
                rutrum augue erat ac eros. Cras ultricies mattis convallis.
              </p>
              <div className="explore">
                <p className="explore-title">EXPLORE ME</p>
                <button className="explore-btn"></button>
              </div>
              <div className="social-links">
                <a href = "https://facebook.com">
                  <img src={Facebook} alt="facebook" />
                </a>
                <a href="https://github.com">
                  <img src={Github} alt="Github" />
                </a>
                <a href="https://twitter.com">
                  <img src={Twitter} alt="Twitter" />
                </a>
                <a href="https://twitter.com">
                  <img src={Linkedn} alt="Linkedn" />
                </a>
              </div>
            </div>
            <div className="hero-section-block-right">
              <h1 className="hero-section-block-right-title">Recent Posts</h1>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
