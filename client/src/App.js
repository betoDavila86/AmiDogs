import React, { Fragment } from 'react';
import './App.css';

import { Header, Gallery, Hero, Footer, SignIn, SignUp } from './components';

import { withRouter, Switch, Route } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';


function App({ history }) {

  return (
    <Fragment>
      <CssBaseline />
      <Switch>
        <Route path="/sign-in" render={() => <SignIn />} />
        <Route path="/sign-up" render={() => <SignUp />} />
        <Route exact path="/" render={() => {
          return (
            <Fragment>
              <Header />
              <main>
                <Hero />
                <Gallery />
              </main>
              <Footer />
            </Fragment>
          );
        }} />
      </Switch>
    </Fragment>
  );
}
export default withRouter(App);
