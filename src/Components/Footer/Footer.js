import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <footer className="footer is-primary">
                <div className='container'>
                    <div className='columns'>
                        <div className='column'>
                            <p>Made by Jayne &hearts;</p>
                        </div>
                        <div className="column-has-text-right">
                            <a className='icon' href="https://www.linkedin.com/in/jayneaniello/">
                                <img src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" /> </a>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer;