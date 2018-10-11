import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';

import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

class App extends Component {
  render() {
    return (
      <Container>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
      </Container>
    );
  }
}

export default App;
