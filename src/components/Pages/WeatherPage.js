import React, { useContext } from 'react'
import styled from 'styled-components'
import ClipLoader from "react-spinners/ClipLoader";

import CurrentWeather from './../UI/CurrentWeather'
import Forecast from './../UI/Forecast'
import Suntime from './../UI/Suntime'
import Context from './../../Context'

function WeatherPage() {
    const { loading } = useContext(Context)

    if (loading) {
        return (
            <LoadinScreen>
                <ClipLoader
                    color="#A9A3CD"
                    loading={loading}
                    size={75}
                />
            </LoadinScreen>
        )
    }

    return (
        <WeatherPageContainer>
            <CurrentWeather />
            <Suntime />
            <Forecast />
        </WeatherPageContainer>
    )
}

export default WeatherPage

const WeatherPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const LoadinScreen = styled.div`
    display: flex;
    height: 80vh;
    align-items: center;
    justify-content: center;
`