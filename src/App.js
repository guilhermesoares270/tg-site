import React from 'react';
import './App.css';
import Container from './components/Container';
import EnterpriseFinder from './components/Container/EnterpriseFinder';
import {
  BrowserRouter as Router,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      {/* <Container /> */}
      <EnterpriseFinder>
        <Container />
      </EnterpriseFinder>
    </Router>
  );
};

export default App;
