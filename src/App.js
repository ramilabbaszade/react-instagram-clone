import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Navbar from './components/Navigation/Navbar'
import Home from './pages/Home/Home';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
