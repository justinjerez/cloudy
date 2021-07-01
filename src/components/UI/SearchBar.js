import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import Context from './../../Context'

function SearchBar() {
    const { getWeather } = useContext(Context)
    const [location, setLocation] = useState('')
    const inputRef = React.createRef()

    const onChange = (e) => {
        setLocation(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (location === '') return false

        getWeather(location)
        setLocation('')
    }

    return (
        <Search>
            <form onSubmit={onSubmit}>
                <SearchInput
                    type="text"
                    ref={inputRef}
                    value={location}
                    onChange={onChange}
                />
                <SearchButton onClick={() => { inputRef.current.focus() }}>
                    <SearchIcon src="img/search.svg" alt="Magnifying Glass" />
                </SearchButton>
            </form>
        </Search>
    )
}

export default SearchBar

const Search = styled.div`
    display:flex;
    align-items:center;

    > form {
        display:flex;
        align-items:center;
        justify-content: center;
    }
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