import React from 'react';
import "./education.css"
import Slide from 'react-reveal/Slide'

const Education = () => {
  return (
    <div id="educationDiv">
      <p id="education">Education</p>
      <div id="box">
      <Slide left>
      <div id="bootcamp">
        <div className="card">
          <div className="header">
            <h6><img src="/images/DU.png" id="duImg"/></h6>
          </div>

          <div className="container" id="edContainer">
            {/* <p id="font1">University College Certificate - Full-Stack Flex Web Development Bootcamp</p> */}
            <p id="font1">UNIVERSITY COLLEGE CERTIFICATE - FULL-STACK FLEX WEB DEVELOPMENT BOOTCAMP</p>
            <br></br>
            <p id="date">02/19 - 05/19</p>
            <br></br>
            <p id="font">Acquired key skills for front and back-end development through a thorough curriculum including HTML5, CSS3, JavaScript, jQuery, Node.js, PHP, Laravel, Express.js, React.js, Database Theory, MongoDB, MySQL, Command Line, Git, and more.</p>
          </div>
        </div>
      </div>
      </Slide>
      <Slide bottom>
      <div id="masters">
      <div className="card">
          <div className="header" id="cuHeader">
            <h6><img src="/images/CU.png" id="cuImg"/></h6>
          </div>

          <div className="container" id="edContainer">
            {/* <p id="font1">M.S. in Physician Assistant Studies</p> */}
            <p id="font1">M.S. IN PHYSICIAN ASSISTANT STUDIES</p>
            <br></br>
            <p id="date">05/13 - 08/16</p>
            <br></br>
            <p id="font">Graduated from a top 10 PA Program in the country, receiving training in comprehensive medical treatment for patients of all ages, with an emphasis in pediatrics and primary care. Received a Rotary Scholarship to initiate a public health research project in Nepal, focusing on the social determinants of breast-feeding practices.</p>
          </div>
        </div>
      </div>
      </Slide>
      <Slide right>
      <div id="college">
      <div className="card">
          <div className="header" id="gcc"> 
            <h6><img src="/images/gcc.jpg"id="gccImg"/></h6>
          </div>

          <div className="container" id="edContainer">
            {/* <p id="font1">B.S. in Molecular Biology - Double Minor in Psychology & English</p> */}
            <p id="font1">B.S. IN MOLECULAR BIOLOGY - MINORS IN PSYCHOLOGY & ENGLISH</p>
            <br></br>
            <p id="date">08/08 - 05/12</p>
            <br></br>
            <p id="font">Graduated from a leading liberal arts and STEM college that is consistently rated in the top 15% of colleges nationwide by the Princeton Review. Received multiple awards, including Mortar Board and ODK's Top 5 Senior Women of the Year, a distinction marked by character, involvement, and academics.</p>
          </div>
        </div>
      </div>
      </Slide>
      </div>
    </div>
  )
}

export default Education