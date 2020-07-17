import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Footer from './components/Footer/Footer';

import './App.css';

const AuthContainer = () => {
  return <div>
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
    <Footer/>
  </div>
}
const DefaultContainer = () => {
  return <div>
    <Navbar />
    <main>
      <Route path="/" exact>
        <Home />
      </Route>
    </main>
  </div>
}

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DefaultContainer} />
        <Route component={AuthContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
