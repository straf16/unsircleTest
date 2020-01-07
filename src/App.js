import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Login from './containers/Login'
import Dashboard from './containers/Dashboard'

function App() {
  let user = {
    email: 'unsircle',
    password: 'unsircle'
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/">
              <Login user={user} />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
