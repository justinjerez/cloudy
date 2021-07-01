import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'

import Context from './../../Context'

function RequestPage(props) {
    const history = useHistory()
    const [location, setLocation] = useState('')
    const { weather, getWeather } = useContext(Context)

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition((position) => {
                setLocation(`${position.coords.latitude}, ${position.coords.longitude}`)
                if (location !== '') {
                    getWeather(location)
                }
            });
        }
    }

    const onSubmit = (e, location) => {
        e.preventDefault()

        if (location !== '') {
            getWeather(location)
        }
    }

    useEffect(() => {
        if (location !== '') {
            history.push('/weather')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [weather])

    return (
        <RequestPageContainer>
            <ContentContainer>
                <img src="img/031-weather forecast.svg" alt="Location" />
                <ContentInformation>
                    <ContentTitle>We need your location to make this work.</ContentTitle>
                    <form action="" onSubmit={(e) => { onSubmit(e, location) }}>
                        <Input
                            type="text"
                            name="location"
                            placeholder="City or country name..."
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            autoComplete="off"
                            required
                        />
                        <Button>
                            Continue
                        </Button>
                    </form>
                    <Button onClick={getLocation}>
                        Use Location Instead
                    </Button>
                </ContentInformation>
            </ContentContainer>
        </RequestPageContainer>
    )
}

export default RequestPage

/* Styles */

const RequestPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    overflow: hidden;

    @media only screen and (min-width: 769px) {
        max-width: 1200px;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
    }
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 3rem;
    align-items: center;
    justify-content: center;
    text-align: center;

    > img {
        width: 20rem;
        height: 20rem;
        margin-bottom: 3rem;
    }

    @media only screen and (min-width: 769px) {
        flex-direction: row;
        width: 100%;
        padding: 0 5rem;
        align-items: center;

        > img {
            width: 45rem;
            height: 45rem;
            margin-right: 2.5rem;
        }
    }
`

const ContentInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    > form {
        margin-bottom: 2rem;
    }

    @media only screen and (min-width: 769px) {
        flex: 1;
        width: 80%;
    }
`

const ContentTitle = styled.h2`
    font-size: 2.8rem;
    font-weight: 500;
    color: var(--color-primary);
    margin-bottom: 1.5rem;
`

const Input = styled.input`
    width: 80%;
    padding: .5rem 1rem;
    font-size: 1.6rem;
    color: var(--color-light-gray);
    border: none;
    border-bottom: 2px solid var(--color-secondary);
    outline: none;
    background-color: transparent;


    &:focus {
        outline: none;
        color: var(--color-light-gray);
    }

    &::placeholder {
        color: var(--color-light-gray);
        font-size: 1.6rem;
    }
`

const Button = styled.button`
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: .15rem;
    color: white;
    padding: 1.2rem 3rem;
    margin-top: 2rem;
    border: none;
    border-radius: 1rem;
    background-color: var(--color-primary);
    outline: none;
    cursor: pointer;

    transition: all .3s ease-in-out;

    &:hover {
        background-color: var(--color-primary-dark);
    }
`