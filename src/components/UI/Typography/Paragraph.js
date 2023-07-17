// Importing dependencies
import React from 'react';
import styled from 'styled-components';

function Text(props) {
    return <Paragraph>{props.children}</Paragraph>;
}

export default Text;

const Paragraph = styled.p`
    font-family: var(--font-family);
    font-size: 1.8rem;
    color: var(--color-light-gray);
    letter-spacing: 0.2rem;
    line-height: 1.6;
    text-align: justify;

    @median only screen and (max-width: 37.5em) {
        text-align: center;
    }
`;
