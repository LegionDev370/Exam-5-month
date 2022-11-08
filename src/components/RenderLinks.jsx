import React from "react";
import { v4 as GeneratorId } from "uuid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const RenderLinks = () => {
  const CategoryData = useSelector((store) => store.getDataCat);
  return (
    <ul className="navigation-nav-list">
      {CategoryData.data &&
        CategoryData.data.length > 1 &&
        CategoryData.data.map((item) => {
          return (
            <li className="navigation-nav-list-items" key={GeneratorId()}>
              <Link to={`/${item.name}/${item.id}`} className="navigation-list-links">
                {item.name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default RenderLinks;
