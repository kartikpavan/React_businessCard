import React from 'react';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

const Socials = () => {
	return (
		<div className="footer">
			<FaFacebookSquare color="gray" />
			<FaGithubSquare color="gray" />
			<FaInstagramSquare color="gray" />
			<FaLinkedin color="gray" />
			<FaTwitterSquare color="gray" />
		</div>
	);
};

export default Socials;
