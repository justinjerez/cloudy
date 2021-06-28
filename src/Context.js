import React, { useState } from 'react'
import axios from 'axios'

const Context = React.createContext()

export const Provider = (props) => {
    const [weather, setWeather] = useState({})

    const getWeather = async (location) => {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=988ecf5faecf4250846150234210906&q=${location}&days=7&aqi=no&alerts=no`
        const res = await axios.get(url)
        setWeather(res.data)
    }

    return (
        <Context.Provider value={{ weather, getWeather }}>
            {props.children}
        </Context.Provider>
    )
}

export default Context