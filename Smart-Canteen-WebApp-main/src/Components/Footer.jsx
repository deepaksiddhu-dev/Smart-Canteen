import React from 'react';
import './ComponentCSS/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <p>
                    Copyright &copy; LokeshwarPrasad ❤
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a href="https://lokeshwar-creatives.netlify.com" target="_blank" rel="noopener noreferrer">
                    Developer
                </a>
            </p>
        </footer>
    );
};

export default Footer;
