import React from 'react';
import {useSelector} from "react-redux";

const Card = () => {
    const {
        page, temp, city, country, tempMax, tempMin, humidity, icon, text
    } = useSelector(state => state);

    const switchPage = () => {
        switch (page) {
            case 'Card':
                return <>
                    <div className="column">
                        <h1>{temp}°C</h1>
                        <h3 className="italic">{city}, {country}</h3>
                        <h2>Max: {tempMax} // Min: {tempMin}</h2>
                        <h3 className="italic">humidity: {humidity}%</h3>
                    </div>
                    <div className="column column2">
                        <div>
                            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" className="icon"/>
                        </div>
                        <h2 className="italic">{text}</h2>
                    </div>
                </>;
            case 'Error':
                return <h1 className="center">Error</h1>;
            default:
                return <img src={require('../banner.jpg')} alt="startBanner" className="startBanner"/>;
        }
    }

    return (
        <div className="card">
            {switchPage()}
        </div>
    );
};

export default Card;