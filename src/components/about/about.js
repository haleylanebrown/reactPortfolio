import React from 'react';
import "./about.css"
import Slide from 'react-reveal/Slide'
import { Container, Row, Col } from 'reactstrap';

export default class About extends React.Component {
    render() {
        return (
            <Col className="aboutDiv" id="aboutAnchor">
                <Slide left>
                    <div id="about2">About</div>
                </Slide>
                <Slide right>
                    <div id="aboutSection">
                        <p id="about1">Former medical professional turned full-stack web developer with a passion for attractive design, creative problem-solving, and user-focused solutions. My background in healthcare deepened my skills in intuitive communication, resourceful diagnosis/problem solving, efficient time management, and effective collaboration as part of a team. I enjoy leveraging my background in healthcare, customer experience, and research to provide unique perspectives on user-preferences and behavior with websites and software platforms. In my spare time, I volunteer with a refugee youth leadership program in Denver and lead a church small group with my husband. When I'm not working or volunteering, I enjoy traveling, painting, and skiing.</p>
                    </div>
                </Slide>
            </Col>
        )
    }
}
