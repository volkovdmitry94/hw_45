import weatherReducer from "../reducers/weatherReducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const initialState = {
    page: 'StartBanner',
    temp: '...',
    city: '...',
    country: '...',
    tempMax: '...',
    tempMin: '...',
    humidity: '...',
    icon: '...',
    text: '...'
};

const store = createStore(weatherReducer, initialState, applyMiddleware(thunk));

export default store;