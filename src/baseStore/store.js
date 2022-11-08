import { configureStore } from "@reduxjs/toolkit";
import getDataCat from "../components/slicers/getDataCat";
import getToken from "../components/slicers/getToken";
import navigate from "../components/slicers/navigate";
import renderDatasHero from "../components/slicers/renderDatasHero";
import Spinner from "../components/slicers/Spinner";
import Linear from "../components/slicers/Linear";
import SwitchToggle from "../components/slicers/SwitchToggle";
export const store = configureStore({
  reducer: {
    getDataCat,
    getToken,
    navigate,
    renderDatasHero,
    Spinner,
    SwitchToggle,
    Linear,

  },
});
