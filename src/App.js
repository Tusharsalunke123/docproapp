import React, { Component } from 'react';
//import  {Switch,Route,Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Login from "./components/login.component";
import Signup from "./components/Signup";


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    );
  }
}


export default App;

