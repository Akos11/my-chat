import React, { Component } from 'react';
import './App.css';
import { proxy } from './Proxy';

import { Login } from './Login'
import { Main } from './Main'


export default class App extends Component {
  state = { loggedIn : false };
  render() {
    proxy.addEventListener("login", () => this.setState({loggedIn : true}), this);
    return (
      <div className="app">
        {!this.state.loggedIn &&< Login />}
        {this.state.loggedIn &&< Main />}
      </div>
    );
  }
}

