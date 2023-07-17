import React from 'react';
import styled from 'styled-components';

import SearchBar from './SearchBar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {
    return (
        <HeaderContainer>
            <Link to='/'>
                <HeaderLogo src='img/cloudy-purple.svg' alt='Logo' />
            </Link>

            <SearchBar />
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1.5rem 3rem;
`;

const HeaderLogo = styled.img`
    width: 10rem;
`;
