import React, { useState } from 'react';
import axios from 'axios';

const Context = React.createContext();

export const Provider = (props) => {
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);

    const printWeatherIcon = (code) => {
        if (code === 1000) {
            return '003-sunny.svg';
        }
        if (code === 1003) {
            return '001-cloudy day.svg';
        }
        if (code === 1006 || code === 1009) {
            return '005-cloudy.svg';
        }
        if (code === 1063 || code === 1183 || code === 1186 || code === 1240) {
            return '015-rainy.svg';
        }
        if (code === 1189 || code === 1192 || code === 1195 || code === 1243) {
            return '012-rainy.svg';
        }
        if (code === 1273 || code === 1276 || code === 1279 || code === 1282 || code === 1087) {
            return '004-thunderstorm.svg';
        }
        if (code === 1066 || code === 1114 || code === 1219 || code === 1216 || code === 1213) {
            return '004-thunderstorm.svg';
        }
    };

    const getWeather = async (location) => {
        setLoading(true);

        const secret = process.env.REACT_APP_WEATHER_API_SECRET;
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${secret}&q=${location}&days=10&aqi=no&alerts=no`;
        const res = await axios.get(url);

        setWeather(res.data);
        setLoading(false);
    };

    return (
        <Context.Provider value={{ weather, getWeather, printWeatherIcon, loading }}>
            {props.children}
        </Context.Provider>
    );
};

export default Context;
