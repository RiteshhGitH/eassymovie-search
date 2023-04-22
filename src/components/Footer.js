import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
	
			<footer>
				

		<footer className="footer-distributed">

			<div className="footer-right">

				<a href="/"><FontAwesomeIcon icon={faFacebookSquare} /></a>
				<a href="/" ><FontAwesomeIcon icon={faTwitter}/></a>
				<a href="/"><FontAwesomeIcon icon={faLinkedin} /></a>
				<a href="/"><FontAwesomeIcon icon={faGithub} /></a>

			</div>

			<div className="footer-left">

				<p className="footer-links">
					<a className="link-1" href="/">Home</a>

				
				

					<a href="/">&nbsp; About</a>

					

					<a href="/">&nbsp; Contact</a>
				</p>

				<p>Ritesh Nandy &copy; 2023</p>
			</div>

		</footer>
			</footer>
	
	);
};

export default Footer;
