import React from 'react'
import '../assets/About.css'

export default function About() {
	return (
		<div className="web-container">
			<div className="about-card">
				{/* Top ID-style photo */}
				<img
					src="/assets/profile.jpg"
					alt="profile"
					className="about-photo"
				/>

				<div className="about-name">Your Name</div>
				<div className="about-role">Frontend Developer · React</div>

				<p className="about-bio">
					Hi — I'm a frontend developer who loves building small, usable apps with React.
					I enjoy learning new patterns and improving UX through simple, thoughtful UI.
				</p>

				<div className="socials">
					<a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
					<a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">Twitter</a>
					<a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
				</div>
			</div>
		</div>
	)
}
