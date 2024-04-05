import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'; 

function Footer() {
    return (
        <div className="flex flex-col justify-center py-4 ">
            <div className="flex justify-center py-3 gap-4">
           <a href='https://www.linkedin.com/in/rajaakacemi/'> <FontAwesomeIcon icon={faLinkedin} className="text-lg font-normal cursor-pointer" /></a>
            <a href="https://twitter.com/heyRajaa"><FontAwesomeIcon icon={faTwitter} className="text-lg font-normal cursor-pointer" /></a>
            <a href="https://github.com/RajaaKacemi"><FontAwesomeIcon icon={faGithub} className="text-lg font-normal cursor-pointer" /></a>
            </div>
            <hr className='w-full py-1'/>
            <p className='py-2'>All rights reserved | Rajaa Kacemi</p>
        </div>
    );
}

export default Footer;
