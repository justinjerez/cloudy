import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import CurrentWeather from './../UI/CurrentWeather'
import Forecast from './../UI/Forecast'
import Suntime from './../UI/Suntime'
import Context from './../../Context'

function WeatherPage() {
    const history = useHistory()
    const { loading, weather } = useContext(Context)

    if (!weather) {
        history.push('/')
    }

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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const LoadinScreen = styled.div`
    display: flex;
    height: 80vh;
    align-items: center;
    justify-content: center;
`