/* create global store */

import { createStore } from "redux";
import { StoreData } from "../types";
import Reducers from "../reducers";

const store = createStore<StoreData>(Reducers);

export default store;
