import {CHANGE_PAGE, PUT_WEATHER} from "../actions/weatherActions";

function weatherReducer(state, action) {
    const res = action.payload;
    switch (action.type) {
        case CHANGE_PAGE:
            return {...state, page: res};
        case PUT_WEATHER:
            return {
                ...state, temp: res.main.temp, city: res.name, country: res.sys.country, tempMax: res.main.temp_max,
                tempMin: res.main.temp_min, humidity: res.main.humidity, icon: res.weather[0].icon,
                text: res.weather[0].main
            };
        default:
            return state;
    }
}

export default weatherReducer;