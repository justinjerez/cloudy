import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './Context'


const App = () => {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Switch>
            
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
