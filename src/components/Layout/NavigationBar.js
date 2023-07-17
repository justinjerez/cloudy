import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

function NavigationBar() {
    return (
        <NavigationBarContainer>
            <Logo src='img/cloudy-purple.svg' alt='Logo' />
            <Button onClick={() => window.scrollTo(0, document.querySelector('#TryIt').offsetTop)}>
                Try it!
            </Button>
        </NavigationBarContainer>
    );
}

export default NavigationBar;

const NavigationBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2em 0 0 0;
`;
const Logo = styled.img`
    width: 12rem;
`;
