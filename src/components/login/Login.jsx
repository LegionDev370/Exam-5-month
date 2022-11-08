import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getToken } from "../slicers/getToken";
import { setToken } from "../slicers/navigate";
import { switchToggle } from "../slicers/SwitchToggle";
import "./style.scss";
import BrandLogo from "../assets/brand-logo.svg";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Spinner from "../spinner/Spinner";
import { setSpinner } from "../slicers/Spinner";
import ReactSwitch from "react-switch";
const Login = () => {
  const navigate = useNavigate();
  const token = useSelector((store) => store.getToken.token);
  const switchBar = useSelector((store) => store.SwitchToggle);
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({});
  const getTokenApi = async (email, password) => {
    try {
      dispatch(setSpinner({ spinner: true }));
      await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        headers: {},
        data: {
          email: email,
          password: password,
        },
      }).then((token) => {
        if (token.status === 200) {
          dispatch(getToken({token: token.data.token}));
          dispatch(setSpinner({ spinner: false }));
        }
      });
    } catch (error) {
      dispatch(setSpinner({spinner: false}))
      alert("Login yoki parol xato boshqattan urinib koring")
    }
  };
  useEffect(() => {
    window.localStorage.setItem("token", JSON.stringify(token));
    const getLocalToken = JSON.parse(localStorage.getItem("token"));
    if (getLocalToken) {
      dispatch(setToken({ payload: true }));
      navigate("/");
    }
  }, [dispatch, token, navigate]);

  const handlerSubmit = () => {
    getTokenApi(loginData.username, loginData.password);
  };

  return (
    <div className="login-content" id={switchBar.switch}>
      <div className="login">
        <div className="container">
          <Spinner />
          <div>
            <Link to={"/login"}>
              <img src={BrandLogo} className="brand-logo" alt="brand-logo" />
            </Link>
          </div>
          <div className="login-wrapper">
            <h2 className="login-wrapper-title">
              Sahifamga xush kelibsiz! Pulli kontentni o'qish uchun tizimga
              kiring.
            </h2>
            <div className="form-login">
              <h2 className="form-login-title">Login</h2>
              <div className="input-data">
                <input
                  type="text"
                  placeholder="username"
                  onChange={(evt) =>
                    setLoginData({
                      ...loginData,
                      username: evt.target.value,
                    })
                  }
                />
                <input
                  type="password"
                  placeholder="password"
                  onChange={(evt) =>
                    setLoginData({
                      ...loginData,
                      password: evt.target.value,
                    })
                  }
                />
                <button
                  type="submit"
                  className="form-submit-btn"
                  onClick={() => handlerSubmit()}
                >
                  Submit
                </button>
                <div className="switch-toggle">
                  <ReactSwitch
                    onChange={() =>
                      dispatch(
                        switchToggle({
                          switch:
                            switchBar.switch === "light" ? "dark" : "light",
                        })
                      )
                    }
                    checked={switchBar.switch === "dark"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
