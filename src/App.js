import React, { Component } from "react";
import Title from "./components/title/title";
import Resume from "./components/resume/resume";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/about/about";
import Dots from "./components/dots/dots";
import Portfolio from "./components/portfolio/portfolio";
import Education from "./components/education/education";
import Footer from "./components/footer/footer";
import "./App.css";
import { restElement } from "@babel/types";
import { Container, Row, Col } from 'reactstrap';



class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Row>
          <Title />
        </Row>
        <div className="parallax">
        <Dots/>
        <svg className="arrows">
							<path className="a1" d="M0 0 L30 32 L60 0"></path>
							<path className="a2" d="M0 20 L30 52 L60 20"></path>
							<path className="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
        <About/>
        <Resume/>
        <Education/>
        <Portfolio/>
        <Footer/>
        </div>
      </>
    );
  }
}

export default App;
