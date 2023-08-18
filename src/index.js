import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './style.css';
import { Link } from 'react-router-dom';
import ContactPage from './views/contact-page';
import Aboutpage2 from './views/aboutpage2';
import MyProjects from './views/my-projects';
import Homepage2 from './views/homepage2';

const Navigation = () => {
  const navStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px'
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    margin: '0',
    padding: '0'
  };

  const liStyle = {
    margin: '0 15px'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    transition: 'color 0.3s ease'
  };

  const linkHoverStyle = {
    color: '#ff9900'
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={liStyle}>
          <Link to="/aboutpage2" style={linkStyle}>About</Link>
        </li>
        <li style={liStyle}>
          <Link to="/my-projects" style={linkStyle}>Projects</Link>
        </li>
        <li style={liStyle}>
          <Link to="/contact-page" style={linkStyle}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Route component={ContactPage} exact path="/contact-page" />
        <Route component={Aboutpage2} exact path="/aboutpage2" />
        <Route component={MyProjects} exact path="/my-projects" />
        <Route component={Homepage2} exact path="/" />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
