import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainContainer from './containers/MainContainer/MainContainer'
import Home from './containers/Home/Home'
 
export default () => {
  return (
    <MainContainer>
      <Router>
        <Route exact path='/' component={Home} />
      </Router>
    </MainContainer>
  );
}