import React, { useEffect, useState } from "react";
import Error from "./error/error";
import { Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import "./App.scss";
import Protect from "./protect/protect";
import Blog from "./blog";
import { useSelector } from "react-redux";
import RenderDatasHero from "./blogPage/main/RenderDatasHero";
import BlogSingle from "./blogPage/blogSingle/BlogSingle";
import BlogSingleHero from "./blogPage/blogSingle/BlogSingleHero";
import SingleHeroComponent from "./blogPage/blogSingle/SingleHeroComponent";
import Logout from "./protect/Logout";
const App = () => {
  const [state, setState] = useState(false);
  const tokenTracker = useSelector((store) => store.navigate.token);
  useEffect(() => {
    if (tokenTracker) {
      setState(true)
    }else{
      setState(false)
    }
  }, [state, tokenTracker]);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route element={<Protect authLogin={state ? state : false} />}>
        <Route path={""} element={<Blog />}>
          <Route path={""} element={<RenderDatasHero />} />
        </Route>
        <Route path={"/tenetur/"} element={<Blog />}>
          <Route path=":slug/" element={<RenderDatasHero />}></Route>
        </Route>
        <Route path="/tenetur/single/:single" element={<BlogSingle />}>
          <Route path="" element={<BlogSingleHero />}>
            <Route path="" element={<SingleHeroComponent />} />
          </Route>
        </Route>
        <Route path={"/laudantium/"} element={<Blog />}>
          <Route path=":slug" element={<RenderDatasHero />} />
        </Route>
        <Route path={"/placeat/"} element={<Blog />}>
          <Route path=":slug" element={<RenderDatasHero />} />
        </Route>
        <Route path={"/corrupti/"} element={<Blog />}>
          <Route path=":slug" element={<RenderDatasHero />} />
        </Route>
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
