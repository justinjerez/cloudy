import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import CurrentWeather from './../UI/CurrentWeather';
import Forecast from './../UI/Forecast';
import Suntime from './../UI/Suntime';
import Context from './../../Context';
import Header from './../UI/Header';

function WeatherPage() {
    const history = useHistory();
    const { loading, weather } = useContext(Context);

    if (loading) {
        return (
            <LoadinScreen>
                <ClipLoader color='#A9A3CD' loading={loading} size={75} />
            </LoadinScreen>
        );
    }

    return (
        <Fragment>
            {weather.location ? (
                <WeatherPageContainer>
                    <Header />
                    <CurrentWeather />
                    <Suntime />
                    <Forecast />
                </WeatherPageContainer>
            ) : (
                history.push('/')
            )}
        </Fragment>
    );
}

export default WeatherPage;

const WeatherPageContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: 37.5em) {
        height: auto;
        min-height: 100vh;
    }
`;

const LoadinScreen = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;
