import React from "react";
import { Outlet, useParams } from "react-router-dom";
import HandleIcon from "../../assets/handle.svg";
import InviteLinkIcon from "../../assets/invite-link-logo.svg";
import { useSelector } from "react-redux";
import "./BlogSingleHero.scss";
const BlogSingleHero = () => {
  const array = useSelector((store) => store.renderDatasHero);
  const { single } = useParams();
  const filtredArray = array.Data.filter(
    (item) => item.title.split(" ").join("-") === single
  );
  return (
    <main className="main">
      <div className="container">
        <div className="blog-single">
          {filtredArray &&
            filtredArray.length >= 1 &&
            filtredArray.map((element) => {
              return (
                <div className="blog-single-left" key={element.id}>
                  <div>
                    <img src={HandleIcon} alt="icon" />
                    <p>{element.likes}</p>
                  </div>
                  <div>
                    <img src={InviteLinkIcon} alt="icon" />
                    <p>{element.shares}</p>
                  </div>
                </div>
              );
            })}
          <div className="blog-single-right">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogSingleHero;
