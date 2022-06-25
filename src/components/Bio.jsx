import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import About from './About';
import Intrests from './Intrests';
import Socials from './Socials';

const Bio = () => {
	return (
		<div>
			<div className="image"></div>
			<div className="main">
				<h1 className="title">Monkey D Luffy</h1>
				<p className="occupation">Frontend Developer</p>
				<p href="" className="website">
					laurasmith.website
				</p>
				<div className="email">
					<MdOutlineEmail size={25} />
					<div className="btn">Email</div>
				</div>
				<About />
				<Intrests />
				<Socials />
			</div>
		</div>
	);
};

export default Bio;
