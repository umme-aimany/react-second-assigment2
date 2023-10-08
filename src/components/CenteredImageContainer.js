import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CenteredImageContainer.css'; // Import your CSS file for styling
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function CenteredImageContainer({ theme }) {
  const containerStyle = {
    backgroundColor: theme === 'white' ? 'black' : 'white', // Apply theme-based background color
    color: theme === 'gray' ? 'black' : 'black', // Apply theme-based text color
  };

  return (
    <div className="centered-image-container" style={containerStyle}>
      <div className="centre">
        <img
          className="centre"
          src={
            'https://png.pngitem.com/pimgs/s/404-4042710_circle-profile-picture-png-transparent-png.png'
          }
          alt="My Image"
        />
        <h1 className="font">UMME AIMAN</h1>
        <h3 className="font">SOFTWARE ENGINEER</h3>
        <div>
          <ul>
            <li className="social">
              <a className="ficon" href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a className="ficon" href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className="ficon" href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>
        <p className="para">
          “If you ever talk to a great programmer, you'll find they
          know their tools like an artist knows their paintbrushes.”
        </p>
      </div>
    </div>
  );
}

export default CenteredImageContainer;
