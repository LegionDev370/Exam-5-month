import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../../slicers/renderDatasHero";
import { setLinear } from "../../slicers/Linear";
import LinearProgressFunc from "../../linear/LinearProgressFunc";
import { v4 as GeneratorId } from "uuid";
import { useParams, Link, Outlet } from "react-router-dom";
import Clock from "../../assets/clock-timer.svg";
import "./RenderDatasHero.scss";
import dayjs from "dayjs";
import Pagination from "./Pagination";
const RenderDatasHero = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const renderDatasHero = useSelector((store) => store.renderDatasHero);
  useEffect(() => {
    dispatch(setLinear({linear: true}))
    axios
      .get(`https://63566a79a2d1844a97742c99.mockapi.io/category/${slug ? slug : 1}/posts`)
      .then((res) => {
        dispatch(getApi({ array: res.data }));
        dispatch(setLinear({linear: false}))
      });
  }, [slug, dispatch]);
  return (
    <>
    {<LinearProgressFunc/>}
      <ul className="posts-list">
        {renderDatasHero.Data &&
          renderDatasHero.Data.length > 1 &&
          renderDatasHero.Data.map((element) => {
            return (
              <Link to={`/tenetur/single/${element.title.split(" ").join("-")}`} key={GeneratorId()} className="posts-render">
                <li className="posts-list-item">
                  <div className="posts">
                    <p className="posts-title">
                      {dayjs(element.createdAt).format("MMMM D YYYY")}
                    </p>
                    <p className="posts-title">Design theory</p>
                  </div>
                  <div>
                    <p className="posts-subtitle">{element.title}</p>
                  </div>
                  <div className="posts-description">
                    <p className="posts-description-title">
                      {element.description}
                    </p>
                  </div>
                  <div className="clock-block">
                    <img src={Clock} alt="clock" />
                    <p className="clock-block-title">
                      {element.readTime} minutes read
                    </p>
                  </div>
                </li>
              </Link>
            );
          })}
      </ul>
      <Pagination />
      <Outlet/>
    </>
  );
};

export default RenderDatasHero;
