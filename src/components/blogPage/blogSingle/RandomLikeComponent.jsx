import React from "react";
import { useSelector } from "react-redux";
import { v4 as GeneratorId } from "uuid";
import dayjs from "dayjs";
import Clock from "../../assets/clock-timer.svg";
import { Link } from "react-router-dom";
const RandomLikeComponent = () => {
  const renderDatasHero = useSelector((store) => store.renderDatasHero);
  const Links = []
  return (
    <>
      <ul className="posts-list">
        {(() => {
          for (let i = 1; i < renderDatasHero.Data.length - 3; i++) {
            const randomNumber = Math.floor(
              Math.random() * renderDatasHero.Data.length
            );
            Links.push(renderDatasHero.Data[randomNumber]);
          }
        })()}
        {Links &&
          Links.length > 1 &&
          Links.map((item) => {
            return (
              <Link
                to={`/tenetur/single/${item.title.split(" ").join("-")}`}
                key={GeneratorId()}
                className="posts-render"
              >
                <li className="posts-list-item">
                  <div className="posts">
                    <p className="posts-title">
                      {dayjs(item.createdAt).format("MMMM D YYYY")}
                    </p>
                    <p className="posts-title">Design theory</p>
                  </div>
                  <div>
                    <p className="posts-subtitle">{item.title}</p>
                  </div>
                  <div className="posts-description">
                    <p className="posts-description-title">
                      {item.description}
                    </p>
                  </div>
                  <div className="clock-block">
                    <img src={Clock} alt="clock" />
                    <p className="clock-block-title">
                      {item.readTime} minutes read
                    </p>
                  </div>
                </li>
              </Link>
            );
          })}
      </ul>
    </>
  );
};

export default RandomLikeComponent;
