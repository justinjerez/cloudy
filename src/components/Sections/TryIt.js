// Importing dependencies
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'

// Importing components
import Title from '../UI/Typography/Title'
import Paragraph from '../UI/Typography/Paragraph'
import Button from '../UI/Button'

import Context from './../../Context'



function TryIt() {
    const history = useHistory()
    const [location, setLocation] = useState('')
    const { weather, getWeather } = useContext(Context)


    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition((position) => {
                const { latitude, longitude } = position.coords

                setLocation(`${latitude}, ${longitude}`)

                if (location !== '') {
                    getWeather(location)
                }
            });
        }
    }

    const onSubmit = async (e, location) => {
        e.preventDefault()

        if (location !== '') {
            await getWeather(location)
            history.push('/weather')
        }
    }

    return (
        <TryItSection id="TryIt">
            <Title>Try it out!</Title>
            <Paragraph>All you need to do is write your country or city name and cloudy will show you how is the weather. Also, you can use geolocation to get you location.</Paragraph>
            <form onSubmit={(e) => { onSubmit(e, location) }}>
                <Input
                    required
                    type="text"
                    name="location"
                    value={location}
                    autoComplete="off"
                    placeholder="Your location here..."
                    onChange={(e) => setLocation(e.target.value)}
                />
                <Button>Start</Button>
            </form>
            <Button theme="blue" onClick={getLocation}>Use geolocation</Button>
            <Circle>&nbsp;</Circle>
        </TryItSection>
    )
}

export default TryIt

const TryItSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8rem 0 20rem 0;

    @media only screen and (max-width: 56.25em) {
        padding: 20rem 0 20rem 0;
     }

    > h2 {
        margin-bottom: 3rem;
    }

    > p {
        max-width: 60%;
        text-align: center;
        margin-bottom: 3rem;

        @media only screen and (max-width: 37.5em) { 
            max-width: 100%;
        }
    }

    > form { 
        display: flex;
        gap: 4rem;
        margin-bottom: 3rem;

        > a {
            align-self: center;
        }

        @media only screen and (max-width: 37.5em) {
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
        }
    }
`

const Input = styled.input`
    font-family: var(--font-family);
    font-size: 2rem;
    background-color: #e5e5e5;
    outline: none;
    border: none;
    border-radius: 1000px;
    letter-spacing: 1px;
    padding: 1.5rem 4rem;
    color: var(--color-light-gray);
`

const Circle = styled.div`
    position: absolute;
    width: 70rem;
    height: 70rem;
    right: -35%;
    bottom: -30%;
    border-radius: 100%;
    filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1));
    background-image: linear-gradient(45deg, var(--color-primary) 20%, var(--color-tertiary-dark));
    z-index: -1;
    overflow-y: hidden;

    @media only screen and (max-width: 56.25em) {
        display: none;
        opacity: 0;
    }
`