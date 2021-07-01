import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import RequestPage from './components/Pages/RequestPage'
import WeatherPage from './components/Pages/WeatherPage'
import Header from './components/UI/Header'
import { Provider } from './Context'

const App = () => {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={RequestPage} />
            <Route exact path='/weather'>
              <Header />
              <WeatherPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
