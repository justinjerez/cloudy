// Importing dependencies
import React from 'react'
import styled from 'styled-components'

// Importing components
import Title from '../UI/Typography/Title'
import Paragraph from '../UI/Typography/Paragraph'
import NavigationBar from '../Layout/NavigationBar'
import Mice from '../UI/Icons/Mice'


function Start() {
    return (
        <StartSection>
            <NavigationBar />
            <ContentContainer>
                <TextContainer>
                    <Title>Know how is the weather with cloudy</Title>
                    <Paragraph>With cloudy you will never get wet, watch the weather predictions for the uncoming days and know exactly when is the best time to enjoy hot chocolate or a sunny walk at the park.</Paragraph>
                </TextContainer>
                <MiceContainer>
                    <Mice />
                </MiceContainer>
                <Image src="img/weather-man.svg" alt="Weather man"/>
            </ContentContainer>
            <Circles src='img/circles-top-right.svg' alt="mouse scrolling"/>
        </StartSection>
    )
}

export default Start

const StartSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const ContentContainer = styled.section`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 56.25em) {
        flex-direction: column;
        justify-content: space-evenly;
    }
`

const MiceContainer = styled.div`
    align-self: flex-end;

    @media only screen and (max-width: 56.25em) {
        order: 3;
        align-self: center;
        padding-bottom: 3rem;
    }

    @media only screen and (max-width: 37.5em) {
    
    }
`

const TextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 40%;

    @media only screen and (max-width: 56.25em) {
        order: 2;
        max-width: 60%;
    }

    @media only screen and (max-width: 37.5em) {
        max-width: 100%;
    }
`

const Image = styled.img`
    flex: 1;

    @media only screen and (max-width: 56.25em) {
        order: 1;
        width: 40vh;
    }
`

const Circles = styled.img`
    position: absolute;
    z-index: -1;
    top: 0;
    right: -15%;
    transform: scale(1.2);
    width: 100rem;

    @media only screen and (max-width: 56.25em) {
        display: none;
    }
`