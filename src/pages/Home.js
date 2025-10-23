import react from 'react'

function Home() {
	return (
		<div className="web-container">
			<div className="home-wrapper">
				<div className="home-card">
					<div className='container'>
						<h1>Welcome🚪</h1>
						<p className='subtitle'>This page is a purposively for Laboratory Activity #4 - Web Development through React – Routing and Navigation</p>
					</div>
					<div className='container'>
						<p className='subtitle'>This is just a decoy. Use the links below to simulate where to go where the action is.<br></br>This button below is without a react router applied because it reloads the whole page </p>
						<div className='cta'>
							<a className='btn nav-link' href='/'>Home</a>
							<a className='btn nav-link' href='/login'>Login</a>
							<a className='btn nav-link' href='lab3'>Lab Repo</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
