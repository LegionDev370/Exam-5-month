import React from "react";
import "./SearchResult.scss";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SearchResult = ({ open, setOpen, result,setResult }) => {
  const resultArray = [];
  const array = useSelector((store) => store.renderDatasHero.Data);
  if (!open) {
    return null;
  }
  array.forEach((item) => {
    if (result !== "") {
      if (item.title.toLowerCase().includes(result.toLowerCase())) {
        resultArray.push(item);
      }
    }
  })
  return (
    <div className="search-wrapper">
      <div className="search-header">
        <h2 className="search-title">Natijalar</h2>
        <button
          type="button"
          className="close-btn"
          onClick={() => {
            setOpen(!open)
            setResult("")
          }}
        >
          x
        </button>
      </div>
      {resultArray.map((item) => {
        return (
          <Link to={`/tenetur/single/${item.title.split(" ").join("-")}`} key = {item.id} className="result-link" onClick={() => {
            setOpen(!open)
            setResult("")
          }}>
            <ul className="search-list" key={item.id}>
              <div className="search-box">
                <p className="search-list-item-title">{item.title}</p>
                <p className="search-list-item-date">
                  {dayjs(item.createdAt).format("MMMM D YYYY")}
                </p>
              </div>
              <li className="search-list-item">
                <p className="search-list-item-description">
                  {item.description}
                </p>
              </li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResult;
