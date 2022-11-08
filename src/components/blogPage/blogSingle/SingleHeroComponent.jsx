import React from "react";
import Clock from "../../assets/clock-timer.svg";
import RandomLikeComponent from "./RandomLikeComponent";
import { useSelector } from "react-redux";
import "./SingleHeroCom.scss";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
const SingleHeroComponent = () => {
  const array = useSelector((store) => store.renderDatasHero);
  const { single } = useParams();
  const filtredArray = array.Data.filter(
    (item) => item.title.split(" ").join("-") === single
  );
  return (
    <>
      {filtredArray &&
        filtredArray.length >= 1 &&
        filtredArray.map((element) => {
          return (
            <div className="single-user" key={element.id}>
              <p className="single-user-title">{element.title}</p>
              <h2 className="single-user-text">
                Bad Design vs. Good Design: 5 Examples We can Learn From
              </h2>
              <div className="user-date">
                <span className="user-date-title">{dayjs(element.createdAt).format("MMMM D YYYY")}</span>
                <div className="clock-img">
                  <img src={Clock} alt="clock" />
                </div>
                <p className="clock-read">{element.readTime} minutes read</p>
              </div>
              <div className="img">
                <img src={element.image} alt="" />
              </div>
              <p className="single-user-content">{element.content}</p>
              <div className="single-user-description-block">
                <p className="single-user-description">
                  Sed commodo ligula vitae mollis tristique. Maecenas egestas
                  semper mauris. Duis tempus blandit ultrices. Proin elit.uz
                  nulla, viverra id suscipit quis, tristique a dolor.<br></br>
                  <br></br> ‘Designing For Sustainability, Tim Frick, 2014'
                </p>
              </div>
              <h2 className="single-user-h2">Lessons Learnt: Best Practice</h2>
              <ul type="circle">
                <li className="single-user-text-slow">
                  Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at
                  lorem ultricies aliquam eu eu nisl.
                </li>
                <li className="single-user-text-slow">
                  Suspendisse. Maecenas sit amet ligula auctor neque aliquam
                  placerat et ac neque. Proin risus eros, fringilla eu suscipit
                  dignissim, dignissim.
                </li>
              </ul>
              <div className="single-user-box">
                <h3 className="single-user-h3">
                  More like this
                  <RandomLikeComponent />
                </h3>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default SingleHeroComponent;
