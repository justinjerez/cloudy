import React from 'react'
import styled from 'styled-components'

import SearchBar from './SearchBar'

function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo src="img/cloudy-purple.svg" alt="Logo" />
            <SearchBar />
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2.5rem 3rem;
`

const HeaderLogo = styled.img`
    width: 10rem;
`