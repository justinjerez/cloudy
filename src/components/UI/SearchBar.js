import React from 'react'
import styled from 'styled-components'

function SearchBar() {
    const inputRef = React.createRef()

    return (
        <Search>
            <SearchInput type="text" ref={inputRef} />
            <SearchButton onClick={() => { inputRef.current.focus() }}>
                <SearchIcon src="img/search.svg" alt="Magnifying Glass" />
            </SearchButton>
        </Search>
    )
}

export default SearchBar

const Search = styled.div`
    display:flex;
    align-items:center;
`

const SearchInput = styled.input`
    width: 0rem;
    font-size: 1.6rem;
    color: var(--color-light-gray);
    border: none;
    border-bottom: 2px solid var(--color-secondary);
    margin-right: .5rem;
    padding-bottom: .5rem;
    align-self: flex-end;
    transition: .4s width ease-in-out;

    &:focus {
        display: initial;
        width: 13rem;
        outline: none;
    }
`

const SearchButton = styled.button`
   background-color: transparent;
   outline: none;
   border: none;
   cursor: pointer;
`

const SearchIcon = styled.img`
    width: 2.2rem;
    height: 2.2rem;
`