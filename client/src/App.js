import { Fragment, useState, useEffect } from 'react';
import './App.css';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Header, Gallery, Hero, Footer, SignIn, SignUp, Modal, Spinner } from './components';

import { CssBaseline } from '@material-ui/core';

import { registerUserAndPet, authentication, retrieveAllDogs, retrieveMyPets, isAuth } from './logic';


function App({ history }) {

  const [userAuth, setUserAuth] = useState(false);
  const [allDogs, setAllDogs] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [myPets, setMyPets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return (async () => {
      setLoading(true)
      if (await isAuth()) {
        setUserAuth(true);
        const dogs = await retrieveAllDogs();
        const myPets = await retrieveMyPets();
        setAllDogs(dogs);
        setMyPets(myPets);
        setLoading(false);
      } else {
        const dogs = await retrieveAllDogs();
        setAllDogs(dogs);
        setLoading(false);
      }
    })();
  }, []);

  const handleCloseModal = () => {
    if (openModal) setOpenModal(false);
  }

  const handleRegister = async (dataSignUp) => {
    try {
      await registerUserAndPet(dataSignUp);
      history.push('/sign-in');
    } catch ({ message }) {
      setOpenModal(true);
      setFeedback(message);
    }
  }

  const handleAuthentication = async (dataSignIn) => {
    try {
      await authentication(dataSignIn);
      const myPets = await retrieveMyPets();
      setUserAuth(true);
      setMyPets(myPets);
      history.push('/');
    } catch ({ message }) {
      setOpenModal(true);
      setFeedback(message);
    }
  }

  return (
    <Fragment>
      <CssBaseline />
      {openModal && <Modal open={openModal} message={feedback} onCloseModal={handleCloseModal} />}
      <Switch>
        {loading && <Spinner />}
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/sign-in" render={() => !isAuth() ? <SignIn onSignIn={handleAuthentication} /> : <Redirect to="/home" />} />
        <Route path="/sign-up" render={() => !isAuth() ? <SignUp onSignUp={handleRegister} /> : <Redirect to="/home" />} />
        <Route path="/home" render={() => {
          return (
            <Fragment>
              <Header />
              <main>
                <Hero user={userAuth} pets={myPets} />
                <Gallery dogs={allDogs} />
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
