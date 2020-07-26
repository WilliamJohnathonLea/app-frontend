import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './common/Header';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App container mx-auto">
        <Header />
        <Switch>
          <Route path="/profile">
            <h1>Profile</h1>
          </Route>

          {/* Home route must go last */}
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
