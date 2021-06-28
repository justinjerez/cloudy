import React, { useContext } from 'react'
import styled from 'styled-components'

import Context from './../../Context'

function CurrentWeather() {
    const { weather } = useContext(Context)

    const city = weather.location.name
    const country = weather.location.country
    const humidity = weather.current.humidity
    const condition = weather.current.condition.text
    const code = weather.current.condition.code
    const temperature = weather.current.temp_c

    const printWeatherIcon = (code) => {
        if (code === 1000) { return '003-sunny.svg' }
        if (code === 1003) { return '001-cloudy day.svg' }
        if (code === 1006) { return '005-cloudy.svg' }
        if (code === 1063 || code === 1183 || code === 1186) { return '015-rainy.svg' }
        if (code === 1189 || code === 1192 || code === 1195) { return '012-rainy.svg' }
        if (code === 1273 || code === 1276 || code === 1279 || code === 1282 || code === 1087) { return '004-thunderstorm.svg' }
        if (code === 1066 || code === 1114 || code === 1219 || code === 1216 || code === 1213) { return '004-thunderstorm.svg' }
    }

    return (
        <CurrentWeatherContainer>
            <WeatherLocation>{city}, <br />{country}</WeatherLocation>
            <WeatherCondition>{condition}</WeatherCondition>
            <WeatherIcon src={`img/${printWeatherIcon(code)}`} alt="" />
            <WeatherTemperature>{temperature}°</WeatherTemperature>
            <WeatherHumidity>
                <HumidityIcon src="img/022-humidity.svg" />
                <HumidityText>Humidity: {humidity}%</HumidityText>
            </WeatherHumidity>
        </CurrentWeatherContainer>
    )
}

export default CurrentWeather

const CurrentWeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 3rem;
    gap: 2rem;
`

const WeatherLocation = styled.h3`
    text-align: center;
    background: linear-gradient(91.53deg, var(--color-secondary), var(--color-secondary-dark) 60.66%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const WeatherCondition = styled.h3`
    font-size: 2.2rem;
    font-weight: 400;
    color: var(--color-primary);
`

const WeatherIcon = styled.img`
    width: 10rem;
    height: 10rem;
`

const WeatherTemperature = styled.h2`
    font-size: 4rem;
    font-weight: bold;
    color: var(--color-primary);
`

const WeatherHumidity = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const HumidityIcon = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`

const HumidityText = styled.span`
    font-size: 1.8rem;
    color: var(--color-primary);
`