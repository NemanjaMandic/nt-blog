// @flow
import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "./App.css";
// import Home from "./Home";

import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
