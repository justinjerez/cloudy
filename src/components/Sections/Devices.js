// Importing dependencies
import React from 'react'
import styled from 'styled-components'

// Importing components
import Title from '../UI/Typography/Title'
import Paragraph from '../UI/Typography/Paragraph'

function Devices() {
    return (
        <DevicesSection>
            <img src="img/devices.svg" alt="Computer and phone with cloudy" />
            <div>
                <Title>You can see the weather in all devices with us</Title>
                <Paragraph>With cloudy you can see the weather any time in any device you want. And the best part is that it is completely <strong>Free</strong>!</Paragraph>
            </div>
            <Circle>&nbsp;</Circle>
        </DevicesSection>

    )
}

export default Devices

const DevicesSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;    
    justify-content: space-between;
    height: 100vh;
    gap: 5rem;

    @media only screen and (max-width: 56.25em) {
        height: auto;
        padding: 15rem 0;
        flex-direction: column;
        justify-content: space-evenly;
    }

    > img {
        flex: 1;
        width: 500px;

        @media only screen and (max-width: 56.25em) {
            width: 40vh;
        }
    }

    > div:not(:last-child) {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        max-width: 40%;

        @media only screen and (max-width: 56.25em) {
            max-width: 60%;

            > h2, p {
                color: white;
            }
        }
    
        @media only screen and (max-width: 37.5em) {
            max-width: 100%;
        }
    }
`

const Circle = styled.div`
    position: absolute;
    width: 90rem;
    height: 90rem;
    left: -50%;
    border-radius: 100%;
    filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1));
    background-image: linear-gradient(45deg, var(--color-primary) 20%, var(--color-tertiary-dark));
    z-index: -1;

    @media only screen and (max-width: 56.25em) {
        border-radius: 0;
        height: 100%;
        width: 120%;
        left: -10%;
        filter: none;
    }
`

