// Importing dependencies
import React, { Fragment } from 'react'
import styled from 'styled-components'

function Button(props) {
    const { link, theme } = props

    return (
        <Fragment>
            {theme === 'blue' ? (
                <Btn onClick={props.onClick} blue>
                    {props.children}
                </Btn>
            ) : (
                <Btn onClick={props.onClick}>
                    {props.children}
                </Btn>
            )}

        </Fragment>
    )
}

export default Button

const Btn = styled.button`
    font-family: var(--font-family);
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: .2rem;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    padding: 1.5rem 4rem;
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.1));
    border: none;
    border-radius: 100rem;
    outline: none;
    transition: all 0.2s linear;
    text-align: center;
    background-image: ${props => props.blue ? 'linear-gradient(120deg, var(--color-tertiary), var(--color-tertiary-dark))' :
        'linear-gradient(90deg, var(--color-secondary), var(--color-secondary-dark))'};
    cursor: pointer;
    

    &:hover { 
        filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.1));
        transform: translateY(-0.3rem);
    }

    &:active {
        filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.1));
        transform: translateY(0rem);
    }
`