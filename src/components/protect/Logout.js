import { useEffect } from "react";
import { getToken } from "../slicers/getToken";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToken({token: false}));
    window.localStorage.removeItem("token");
    navigate("/")
  }, [dispatch,navigate]);
};

export default Logout;
