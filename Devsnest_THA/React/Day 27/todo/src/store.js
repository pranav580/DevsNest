import Reducer from "./redux/reducer";
import { createStore } from "redux";

const store = createStore(Reducer);

export default store;