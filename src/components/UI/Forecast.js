import React, { useContext } from 'react'
import styled from 'styled-components'

import Context from './../../Context'

function Forecast() {
    const { weather, printWeatherIcon } = useContext(Context)
    const forecasts = weather.forecast.forecastday

    return (
        <ForecastContainer>
            {forecasts.map(forecast => {
                const code = forecast.day.condition.code
                const temperature = Math.round(forecast.day.avgtemp_c)
                const date = new Date(forecast.date).toLocaleDateString('en-Us', {weekday: 'long'})
                const day = date.substring(0, 3)


                return (
                    <ForecastDay key={day}>
                        <img src={`img/${printWeatherIcon(code)}`} alt="Weather" />
                        <span>{temperature}°</span>
                        <p>{day}</p>
                    </ForecastDay>
                )
            })}
        </ForecastContainer>
    )
}

export default Forecast

const ForecastContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2rem 3rem;
`

const ForecastDay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    background-color: var(--color-primary);
    padding: 1.5rem 2rem;
    border-radius: 1.2rem;
    gap: .75rem;

    > img {
        width: 4rem;
    }

    > span {
        font-size: 1.8rem;
        font-weight: bold;
    }

    > p {
        font-size: 1.4rem;
    }

`