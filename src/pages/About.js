import React from 'react';
import '../assets/About.css';
import pfp from '../assets/img/jayson.webp'

export default function About() {
	return (
		<div className="web-container">
			<div className="about-card">
				{/* Top ID-style photo */}
				<img
					src={pfp}
					alt="profile"
					className="about-photo"
				/>

				<div className="about-name">Jayson Bulugagao</div>
				<div className="about-role">BSIT-3-4</div>

				<p className="about-bio">
					Hi — I'm a frontend developer who loves building small, usable apps with React.
					I enjoy learning new patterns and improving UX through simple, thoughtful UI.
				</p>

				<div className="socials">
					<a href='mailto:jayson.bulugagao@cvsu.edu.ph' target='blank' rel='noreferrer'>Email</a>
					<a href="https://github.com/s0nprem0" target="_blank" rel="noreferrer">GitHub</a>
					<a href="https://www.linkedin.com/in/jzsn_b" target="_blank" rel="noreferrer">LinkedIn</a>
				</div>
			</div>
		</div>
	)
}
