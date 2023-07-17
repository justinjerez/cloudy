import React from 'react';
import styled from 'styled-components';

function Container(props) {
    return <MainContainer>{props.children}</MainContainer>;
}

export default Container;

const MainContainer = styled.main`
    max-width: 90em;
    margin: 0 auto;

    @media only screen and (max-width: 100em) {
        padding: 0 4rem;
    }
`;
