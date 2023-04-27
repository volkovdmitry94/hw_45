export const CHANGE_PAGE = 'CHANGE_PAGE';
export const PUT_WEATHER = "PUT_WEATHER";

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = '8e2394541a5182d2c1aa64972ba1ff15';

export const changePage = (page) => ({
    type: CHANGE_PAGE,
    payload: page
});

export const getWeatherAction = (city) => {
    return (dispatch) => {
        fetch(`${BASE_URL}?appid=${API_KEY}&units=metric&q=${city}`)
            .then(response => {
                if (response.ok)
                    return response.json();
                else dispatch(changePage('Error'));
            })
            .then(data => dispatch(putWeatherAction(data)))
            .catch(e => dispatch(changePage('Error')));
    }
};

export const putWeatherAction = (weather) => ({
    type: PUT_WEATHER,
    payload: weather
});

