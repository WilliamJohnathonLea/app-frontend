import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './common/Header';
import Home from './home/Home';
import Profile from './profile/Profile';

function App() {
  return (
    <Router>
        <Header />
        <main className="container mx-auto">
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>

            {/* Home route must go last */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
    </Router>
  );
}

export default App;
