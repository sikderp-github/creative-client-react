import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import googlelogo from '../../../images/logos/googlelogo.png';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
        console.log(error);
      });
  }

  return (
    <div className="container-fluid align-items-center justify-content-center login-container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="container-fluid text-center mx-auto">
          <Link to="/"><img style={{ height: "10vh" }} src={logo} alt="" /></Link>
        </div>
        <div className="col-md-6 shadow p-5 login-area text-center justify-content-center">
          <div className="form-group">
            <label id="login-label" htmlFor="" className="text-secondary">Login With</label>
          </div>
          <div className="from-group mt-3 mx-auto">
            <div className="col googleSign border border-secondary rounded-pill justify-content-around align-items-center w-auto p-1 mr-5">
              <img src={googlelogo} alt="" />
              <button className="btn text-success" onClick={handleGoogleSignIn}>Continue with Google</button>
            </div>
            <div className="mt-2">
              <p>Don't have an account: <a href="/registration">Create an account</a></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;