import React from 'react';
import styled from 'styled-components';

function Title(props) {
    return <TitleWrapper>{props.children}</TitleWrapper>;
}

export default Title;

const TitleWrapper = styled.h2`
    font-family: var(--font-family);
    font-size: 3.6rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    line-height: 1.6;
    text-transform: uppercase;
    color: var(--color-primary);

    @media only screen and (max-width: 37.5em) {
        font-size: 3rem;
    }
`;
