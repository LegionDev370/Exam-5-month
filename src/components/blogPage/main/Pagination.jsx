import React from "react";
import { v4 as GeneratorId } from "uuid";
import "./Pagination.scss";
const Pagination = () => {
  return (
    <div className="pagination-numbers">
      <div className="pagination-block">
        <button type="button" className="decrement-btn"></button>
        {(() => {
          let buttons = [];
          for (let i = 1; i < 5; i++) {
            buttons.push(
              <button key={GeneratorId()} className="pagination-numbers-btn">{i}</button>
            );
          }
          return buttons;
        })()}
        <button type="button" className="increment-btn"></button>
      </div>
    </div>
  );
};

export default Pagination;
