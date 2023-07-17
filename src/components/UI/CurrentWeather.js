import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from './../../Context';

function CurrentWeather() {
    const { weather, printWeatherIcon } = useContext(Context);

    const city = weather.location.name;
    const country = weather.location.country;
    const humidity = weather.current.humidity;
    const condition = weather.current.condition.text;
    const code = weather.current.condition.code;
    const temperature = Math.round(weather.current.temp_c);

    return (
        <CurrentWeatherContainer>
            <WeatherLocation>
                {city}, <br />
                {country}
            </WeatherLocation>

            <WeatherCondition>{condition}</WeatherCondition>

            <WeatherIcon src={`img/${printWeatherIcon(code)}`} alt='' />

            <WeatherTemperature>{temperature}°</WeatherTemperature>

            <WeatherHumidity>
                <HumidityIcon src='img/022-humidity.svg' />
                <HumidityText>Humidity: {humidity}%</HumidityText>
            </WeatherHumidity>
        </CurrentWeatherContainer>
    );
}

export default CurrentWeather; /*  */

const CurrentWeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 2rem 3rem;
    gap: 1.5rem;
`;

const WeatherLocation = styled.h3`
    text-align: center;
    font-size: 2.2rem;
    background: linear-gradient(
        91.53deg,
        var(--color-secondary),
        var(--color-secondary-dark) 60.66%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const WeatherCondition = styled.h3`
    font-size: 2.4rem;
    font-weight: 400;
    color: var(--color-primary);
    text-align: center;
`;

const WeatherIcon = styled.img`
    width: 18rem;
    height: 18rem;

    @media only screen and (max-width: 37.5em) {
        width: 15rem;
        height: 15rem;
    }
`;

const WeatherTemperature = styled.h2`
    font-size: 4rem;
    font-weight: bold;
    color: var(--color-primary);
`;

const WeatherHumidity = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const HumidityIcon = styled.img`
    width: 3.5rem;
    height: 3.5rem;
`;

const HumidityText = styled.span`
    font-size: 2.2rem;
    color: var(--color-primary);
`;
