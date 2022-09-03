import React from 'react'
import elonbanner from '../images/elonbanner.png'
import arrow from '../images/aestheticarrow.png'
import "../App.css";
import elonmusk from '../images/elonmusk.png'
import graph from '../images/graph.png'

import Sidebar from './Sidebar';
import Navbar from './Navbar';
const Profile = () => {
  return (
    <>
	<div className="background">
			<Navbar />
		<div class="both">
			<Sidebar />
				<div class="profilemain">
					<div className="banner">
						<img src={elonbanner} alt=""/>
					</div>

					<div class="propic">
						<img src={elonmusk} alt=""/>
					</div>

					<div className="profileinfo">
						<h1>Elon Musk</h1>
						<h2>$elonmusk</h2>
						<div class="bio">
							<p>Entrepreneur, CEO Tesla Motors, <br />Spacex, Boring company and Open AI. <br />About to buy Twitter.</p>
						</div>
						<div class="ownership">
							<p>If you are “elonmusk” on twitter: <br />1. Tweet you public key. <br />2. You username will be <br />transferred within 24 hours via DMs.</p>
						</div>
						<div class="impinfo">
							<div class="infochunk1">
								<h1>Coins in circulation:</h1>
								<div class="num">
									<h1>9,956.093</h1>
								</div>
							</div>
							<div class="infochunk2">
								<h1>Market cap:</h1>
								<div class="num">
									<h1>71,479.172 Fcoins</h1>
									<h1>≈$35,739,586.163</h1>
								</div>
							</div>
							<div class="infochunk3">
								<h1>Coins in circulation:</h1>
								<div class="num">
									<h1>9,956.093</h1>
								</div>
							</div>
						</div>
						<div class="graph">
						<img src={graph} alt="" />
						</div>
						<div class="inputs">
							<div class="first">
								<input type="text" />
								<h1>Fcoins</h1>
							</div>
							
							<div class="second">
								<input type="text" />
								<h1>$eloncoins</h1>
							</div>
							<div class="arrow">
								<img src={arrow} />
							</div>
							<div class="buy">
								<button>Buy</button>
							</div>
							<div class="balance">
								<h1>
									Balance: 22734.52
								</h1>
							</div>
						</div>
					</div>
				</div>
		</div>
	</div>
		</>
  )
}

export default Profile