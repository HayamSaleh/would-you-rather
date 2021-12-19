import { createStore } from "redux";
import middleware from "./middleware";
import reducer from './reducers/index';

export default createStore(reducer, middleware);