import React, { useContext } from 'react'
import styled from 'styled-components'

import Context from './../../Context'

function Suntime() {
    const { weather } = useContext(Context)
    const { sunrise, sunset } = weather.forecast.forecastday[0].astro
    return (
        <SuntimeContainer>
            <SuntimeComponent>
                <h4>Sunrise</h4>
                <img src="img/016-sunrise.svg" alt="Sunrise" />
                <span>{sunrise}</span>
            </SuntimeComponent>
            <SuntimeComponent>
                <h4>Sunset</h4>
                <img src="img/017-sunset.svg" alt="Sunset" />
                <span>{sunset}</span>
            </SuntimeComponent>
        </SuntimeContainer>
    )
}

export default Suntime

const SuntimeContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2rem 3rem;
    width: 100%;
    justify-content: space-around;
`

const SuntimeComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-primary);
    gap: 1.5rem;

    > h4 {
        font-size: 1.6rem;
        font-weight: 400;
        
    }

    > img {
        width: 10rem;
    }
`