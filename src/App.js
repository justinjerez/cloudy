import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import LandingPage from './components/Pages/LandingPage'
import RequestPage from './components/Pages/RequestPage'
import WeatherPage from './components/Pages/WeatherPage'
import Header from './components/UI/Header'
import { Provider } from './Context'

const App = () => {
  return (
    <Provider>
      <Router>
        <AppContainer className="App">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/weather'>
              <WeatherPage />
            </Route>
          </Switch>
        </AppContainer>
      </Router>
    </Provider>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`