import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'; 

function Footer({ isDarkMode }) {
    return (
        <div className={`flex flex-col justify-center py-2  ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className="flex justify-center py-3 gap-4">
                <a target="_blank" href='https://www.linkedin.com/in/rajaakacemi/' >
                    <FontAwesomeIcon icon={faLinkedin} className={`text-lg font-normal cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`} />
                </a>
                <a target="_blank" href="https://twitter.com/heyRajaa">
                    <FontAwesomeIcon icon={faTwitter} className={`text-lg font-normal cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`} />
                </a>
                <a target="_blank" href="https://github.com/RajaaKacemi">
                    <FontAwesomeIcon icon={faGithub} className={`text-lg font-normal cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`} />
                </a>
            </div>
            <hr className={`w-full py-1 ${isDarkMode ? 'text-white' : 'text-black'}`} />
            <p className={`py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Rajaa Kacemi | 2024</p>
        </div>
    );
}

export default Footer;
