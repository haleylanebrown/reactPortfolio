import React, { Component } from "react";
import "./resume.css";
import { Container, Row, Col } from 'reactstrap';
import Slide from 'react-reveal/Slide'


export default class Resume extends React.Component{
    render() {
      return (
        <>
<div id="resumeDiv">
<Slide right>
<p id="skills">Skills</p>
</Slide>

<Col className=".col-6 .col-sm-4">
<Slide left>
<div id="box1"></div>
<img id="squiggle" src="images/squiggle2.gif" loop="-1"/>
</Slide>
</Col>
<Col className=".col-6 .col-sm-4" id="skillCol">
<div id="skillIcons" className="container">
<i className="devicon-react-original-wordmark devicon"></i>
<i className="devicon-bootstrap-plain-wordmark devicon"></i>
<i className="devicon-javascript-plain devicon"></i>
<i className="devicon-jquery-plain-wordmark devicon"></i>
<br></br>
<i className="devicon-css3-plain-wordmark devicon"></i>
<i className="devicon-html5-plain-wordmark devicon"></i>
<i className="devicon-express-original-wordmark devicon"></i>
<i className="devicon-git-plain-wordmark devicon"></i>
<br></br>
<i className="devicon-github-plain-wordmark devicon"></i>
<i className="devicon-gitlab-plain-wordmark devicon"></i>
<i className="devicon-heroku-original devicon"></i>
<i className="devicon-mocha-plain devicon"></i>
<br></br>
<i className="devicon-mongodb-plain-wordmark devicon"></i>
<i className="devicon-mysql-plain-wordmark devicon"></i>
<i className="devicon-nodejs-plain-wordmark devicon"></i>
<i className="devicon-php-plain"></i>
<br></br>
<i className="devicon-sequelize-plain-wordmark devicon"></i>
<i className="devicon-slack-plain-wordmark devicon"></i>
<i className="devicon-trello-plain-wordmark devicon"></i>
<i className="devicon-visualstudio-plain-wordmark devicon"></i>
</div>
</Col>
<Col className=".col-6 .col-sm-4">
<Slide right>
<div id="box2"></div>
<img id="squiggle2" src="images/squiggle2.gif"/>
</Slide>
</Col>
</div>
<div id="techniquesDiv">
<img src="images/agile.jpeg" id="agile"/>
<img src="images/api.png" id="api"/>
<img src="images/mobile.jpg" id="mobile"/>
<div id="innerDiv">
<Slide left>
<p id="techniques"><img id="techniquesImg" src="images/techniques.png"/>Techniques</p>
</Slide>
<Slide bottom>
<div id="tSection">
<p id="t">Agile</p>
<p id="t">API Integration</p>
<p id="t">Responsive Design</p>
<p id="t">Security/Session Storage</p>
<p id="t">RESTful API Design</p>
<p id="t">MVC Frameworks</p>
</div>
</Slide>
</div>
</div>
</>
      )
    }
}