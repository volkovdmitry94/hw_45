import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {changePage, getWeatherAction} from "../redux/actions/weatherActions";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleGetCity = () => {
        if (city) {
            dispatch(changePage('Card'));
            dispatch(getWeatherAction(city));
            setCity('');
        } else {
            alert('Please enter city');
        }
    }

    return (
        <div className="input-wrapper">
            <input className="city_input" type='text' name='city' placeholder='Please enter city' value={city}
                   onChange={(e) => setCity(e.target.value)}/>
            <button type='button' onClick={() => handleGetCity()}>Get weather</button>
        </div>
    );
};

export default Form;