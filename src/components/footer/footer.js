import React from 'react';
import "./footer.css"

class Footer extends React.Component{
    render() {
      return (
        <footer>
        <div className="footer-content">
        <div>
            <h4>Location</h4>
            <p>Denver</p>
        </div>
        <div>
            <h4>Email</h4>
            <p><a href="mailto:smith.haley888@gmail.com">smith.haley888@gmail.com</a></p>
        </div>
        <div>
            <h4>Phone</h4>
            <p>(719) 930-2987</p>
        </div>
        <div>
            <h4>Social</h4>

            <a href="https://www.linkedin.com/in/haley-brown-02785676/" target="_blank">
                <img className="footerIcon" src='https://img.icons8.com/material/24/000000/linkedin.png'/>
            </a>
            <a href="https://github.com/haleylanebrown" target="_blank">
            <img className="footerIcon" src="https://img.icons8.com/material/24/000000/github.png"/>
            </a>
            <a href="https://www.instagram.com/haleylanebrown/" target="_blank">
            <img className="footerIcon" src="https://img.icons8.com/material/24/000000/instagram-new.png"/>
            </a>
        </div>
    </div>
    </footer>
        )
    }
  }
  
  export default Footer;