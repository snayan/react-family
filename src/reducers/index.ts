/* export reducers */

import { combineReducers } from "redux";
import { StoreData } from "../types";
import login from "./login";
import charts from "./charts";

const reducers = {
  login: login,
  charts: charts
};

export default combineReducers<StoreData>(reducers);
