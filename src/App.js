import React from 'react';
import './App.css';
import Container from './components/Container';
import {
  BrowserRouter as Router,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Container />
    </Router>
  );
};

export default App;
