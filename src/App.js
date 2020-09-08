import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard';
import HomePage from './components/HomePage';
import Registration from './components/Registration';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  //   UncontrolledDropdown,
  //   DropdownToggle,
  //   DropdownMenu,
  //   DropdownItem,
  NavbarText,
} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //Link
import './App.css';

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md" className="nav-bar-opacity">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/Registration">Registration</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Scoreboard">Scoreboard</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Cricket Score Board</NavbarText>
          </Collapse>
        </Navbar>

        <Switch>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/scoreboard">
            <Scoreboard />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
