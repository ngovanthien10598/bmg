import React from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookLogin from 'react-facebook-login';

function App() {

  function onCallback(response) {
    console.log(response);
  }

  return (
    <div className="test">
      <FacebookLogin
        appId="720608581844868"
        cookie={true}
        fields="name,email,picture"
        callback={onCallback}/>
    </div>
  );
}

export default App;
