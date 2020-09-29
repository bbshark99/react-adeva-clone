import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import LoginPage from './pages/Login';
import HirePage from './pages/Hire';
import ApplyPage from './pages/Apply';
import PageNotFound from './pages/404Page';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/hire" component={HirePage} />
        <Route path="/apply" component={ApplyPage} />
        <Route component={PageNotFound} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
