import React from 'react';
import "./portfolio.css"
import Slide from 'react-reveal/Slide';

const Portfolio = () => {
    return (
        <div id="portfolioDiv">
            <Slide left><p id="recent">Recent Work</p></Slide>
            <div className="block__container">
                <div className="block__row">
                    <div className="block__item" id="block1" href="#block4">
                        <div className="block__image" style={{ backgroundColor: 'black' }}></div>
                        <a href="https://github.com/ksknight85/MeetInTheMiddle" target="blank"><i className="devicon-github-plain-wordmark devicon" id="Devicon"></i></a>
                        <a href="https://meet-inthe-middle.herokuapp.com/" target="blank"><i className="material-icons">call_missed_outgoing</i></a>
                        <div id="info">
                            <p className="portFont" id="portTitle">MEET IN THE MIDDLE</p>
                            <br></br>
                            <p className="portFont" id="description">A React app that allows users to enter 2-5 addresses to find a central meeting point.</p>
                            <br></br>
                            <p className="portFont" id="techUsed">React, passport.js, Express, mongodb, mongoose, Node, reactstrap</p>
                        </div>
                    </div>
                    <div className="block__item" id="block2" href="#block5">
                        <div className="block__image" style={{ backgroundColor: '#f3cf47' }}></div>
                        <a href="https://github.com/ksknight85/Cat-Attack" target="blank"><i className="devicon-github-plain-wordmark devicon" id="Devicon"></i></a>
                        <a href="https://cat-attack1.herokuapp.com/" target="blank"><i className="material-icons">call_missed_outgoing</i></a>
                        <div id="info">
                            <p className="portFont" id="portTitle2">CAT ATTACK!</p>
                            <br></br>
                            <p className="portFont" id="description3">A cat game app that allows users to play March Madness with cat gifs.</p>
                            <br></br>
                            <p className="portFont" id="techUsed3">passport.js, Express, Node, Bootstrap, mySQL, Javascript/jQuery, Giphy API, HTML5, CSS3</p>
                        </div>
                    </div>
                    <div className="block__item" id="block3" href="#block6">
                        <div className="block__image" style={{ backgroundColor: '#e8685d' }}></div>
                        <a href="https://github.com/haleylanebrown/Travel-Roulette" target="blank"><i className="devicon-github-plain-wordmark devicon" id="Devicon"></i></a>
                        <a href="https://haleylanebrown.github.io/Travel-Roulette/" target="blank"><i className="material-icons">call_missed_outgoing</i></a>
                        <div id="info">
                            <p className="portFont" id="portTitle3">TRAVEL ROULETTE</p>
                            <br></br>
                            <p className="portFont" id="description">A travel app that randomly selects a different location for users to travel to and provides information on local events, weather, etc.</p>
                            <br></br>
                            <p className="portFont" id="techUsed2">JavaScript, jQuery, HTML5, CSS3, various APIs</p>
                        </div>
                    </div>
                </div>
                <div className="block__row">
                    <div className="block__item" id="block4" href="#block1">
                        <div className="block__image" style={{ backgroundColor: 'white' }}></div>
                        <a href="https://github.com/haleylanebrown/clicky-game" target="blank"><i className="devicon-github-plain-wordmark devicon" id="Devicon2"></i></a>
                        <a href="https://clicky-game8.herokuapp.com/" target="blank"><i className="material-icons material-icons2">call_missed_outgoing</i></a>
                        <div id="info">
                            <p className="portFont" id="portTitle2">CLICKY GAME</p>
                            <br></br>
                            <p className="portFont" id="description2">A React-based game that tests the user's memory.</p>
                            <br></br>
                            <p className="portFont" id="techUsed2">React, Node.js, HTML5, CSS3, Javascript</p>
                        </div>
                    </div>
                    <div className="block__item" id="block5" href="#block2">
                        <div className="block__image" style={{ backgroundColor: '#3a8d91' }}></div>
                        <a href="https://github.com/haleylanebrown/news-scraper" target="blank"><i className="devicon-github-plain-wordmark devicon" id="Devicon"></i></a>
                        <a href="https://news-scraper8.herokuapp.com/" target="blank"><i className="material-icons">call_missed_outgoing</i></a>
                        <div id="info">
                            <p className="portFont" id="portTitle3">NYT MONGO SCRAPER</p>
                            <br></br>
                            <p className="portFont" id="description3">An app that scrapes articles from the NYT website and lets users save articles and leave comments on the latest news.</p>
                            <br></br>
                            <p className="portFont" id="techUsed3">Node.js, Express.js, Handlebars.js, MongoDB, Mongoose, various npm packages</p>
                        </div>
                    </div>
                    <div className="block__item" id="block6" href="#block3">
                        <div className="block__image" style={{ backgroundColor: 'black' }}></div>
                        <a href="https://github.com/haleylanebrown/burger" target="blank"><i className="devicon-github-plain-wordmark devicon" id="Devicon"></i></a>
                        <a href="https://thawing-forest-54935.herokuapp.com/" target="blank"><i className="material-icons">call_missed_outgoing</i></a>
                        <div id="info">
                            <p className="portFont" id="portTitle">EAT-DA-BURGER</p>
                            <br></br>
                            <p className="portFont" id="description">An app that logs burgers using MVC design, Node/MySQL to query + route data, and Handlebars to generate HTML</p>
                            <br></br>
                            <p className="portFont" id="techUsed">MySQL, Node, Express, Handlebars, homemade ORM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio