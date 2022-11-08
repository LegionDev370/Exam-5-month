import React from "react";
import { recieveCategory } from "../../slicers/getDataCat";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BarsMenu from '../../assets/bars-menu.svg';
import "../../header.scss";
import BrandLogo from "../../assets/brand-logo.svg";
import BrandLogoMobile from '../../assets/brand-logo-mobile.svg';
import axios from "axios";
import RenderLinks from "../../RenderLinks";
import SearchResult from "./SearchResult";
import CollapseMobile from "./CollapseMobile";
const Header = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [menu,setMenu] = useState(false)
  const [result, setResult] = useState("");
  useEffect(() => {
    axios
      .get("https://63566a79a2d1844a97742c99.mockapi.io/category")
      .then((response) => {
        dispatch(recieveCategory({ state: response.data }));
      });
  }, [dispatch]);
  const setMenuFunc = () => {
    setMenu(!menu)
  }
  return (
    <header>
      <div className="container">
        <div className="navigation-navbar">
          <div>
            <Link to="/">
              <img className="brand-logo" src={BrandLogo} alt="brand-logo" />
            </Link>
          </div>
          <button className="bars-menu" onClick={() => setMenu(!menu)}>
            <img src={BarsMenu} alt="menu" />
          </button>
          <div className="navigation-nav">
            <RenderLinks/>
          </div>
          <div className={`collapse-navbar ${menu ? "" : "collapse-navbar-none"}`}>
            <div className="collapse-header">
              <img src={BrandLogoMobile} alt="" />
              <button type="button" className="btn-cancel" onClick={() => setMenu(!menu)}></button>
            </div>
            <CollapseMobile setMenuFunc = {setMenuFunc}/>
          </div>
          <div>
            <form className="form">
              <div className="input-data">
                <input
                  type="text"
                  placeholder="search"
                  value={result}
                  onChange={(event) => {
                    setOpen(true);
                    setResult(event.target.value);
                  }
                }
                />
                <button type="button" className="btn-search"></button>
              </div>
            </form>
          </div>
        </div>
        <SearchResult setResult = {setResult} result={result} open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};

export default Header;
