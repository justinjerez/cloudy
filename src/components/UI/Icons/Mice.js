import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

function Mice() {
    return (
        <Fragment>
            <svg
                width='24'
                height='72'
                viewBox='0 0 24 72'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g id='mice'>
                    <MiceWArrow
                        id='mice_arrow-down'
                        d='M5.8 51.58L8 48.94L12 52.02L16 48.94L18.28 51.58L12 57.06L5.8 51.58Z'
                        fill='#A9A3CD'
                    />
                    <rect
                        id='mice__body'
                        x='0.125'
                        width='23.875'
                        height='43'
                        rx='11.9375'
                        fill='#A9A3CD'
                    />
                    <rect
                        id='mice__weel'
                        x='9.16589'
                        y='4.91428'
                        width='5.61765'
                        height='11.0571'
                        rx='2.80882'
                        fill='white'
                    />
                </g>
            </svg>
        </Fragment>
    );
}

export default Mice;

const downAnimation = keyframes`
    0% {transform: translateY(0)}
    50% {transform: translateY(.5rem)}
    100% {transform: translateY(0)}
`;

const MiceWArrow = styled.path`
    animation: ${downAnimation} 1s linear infinite;
`;
