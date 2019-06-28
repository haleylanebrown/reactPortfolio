import React from 'react';
import { bubble as Menu } from 'react-burger-menu'
import "./NavBar.css"
 
export default class NavBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
 
  render () {
    return (
      <Menu id="menu">
        <a id="homeNav" className="menu-item" href="#group4">Top</a>
        <a id="aboutNav" className="menu-item" href="#aboutAnchor">About</a>
        <a id="skillsNav" className="menu-item" href="#resumeDiv">Skills</a>
        <a id="techniquesNav" className="menu-item" href="#techniquesDiv">Techniques</a>
        <a id="educationNav" className="menu-item" href="#educationDiv">Education</a>
        <a id="recentNav" className="menu-item" href="#portfolioDiv">Recent Work</a>
        {/* <a onClick={ this.showSettings } className="menu-item" href="">Settings</a> */}
      </Menu>
    );
  }
}