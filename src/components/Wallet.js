import React from 'react'
import identicon from '../images/identicon.png'
import "../App.css";
import Sidebar from './Sidebar';
import Navbar from './Navbar';
const Wallet = () => {
  return (
    <div className="background">
		<>
		<Navbar />
		<div className="both">
			<Sidebar />
			<div className="mainwallet">
				<div className="leftofwallet">
					<p>To start investing in creators add balance to your account</p>
					<img src={identicon} alt="" width="200px" height="200px"/>
					<h1>Name</h1>

						<div className="walletaddress">
							<h1>Wallet address</h1>
							<div class="address">
								<p>0xa7a3A2eE2E20D45a08d0C97c9F63805008086312 <button>Copy</button></p>
							</div>
						</div>
					<div className="fwalletbalance">
						<h1>Balance in wallet</h1>
						<br></br>
						<table>

							<tr>
								<th>Timestamp</th>
								<th>Amount</th>
								<th>State</th>
							</tr>

							<tr>
								<td>13 days 4 hours ago</td>
								<td>2.54 Fcoin</td>
								<td>Added</td>
							</tr>

							<tr>
								<td>7 days 23 hours ago </td>
								<td>3.29 Fcoin</td>
								<td>Withdrawn</td>
							</tr>
							
							<tr>
								<td>14 days 15 hours ago </td>
								<td>12.95 Fcoin</td>
								<td>Withdrawn</td>
							</tr>

							<tr>
								<td>23 days 1 hours ago </td>
								<td>5.05 Fcoin</td>
								<td>Added</td>
							</tr>
							
							<tr>
								<td>59 days 15 hours ago </td>
								<td>12.95 Fcoin</td>
								<td>Added</td>
							</tr>

						</table>
					</div>
				</div>
						<div className="rightofwallet">
							<div class="balancebox">
								<h1>Balance available</h1>
								<div class="amountcolor">
								<h1>52,459.54 Fcoin</h1>
								</div>
								<p>≈$52,459.54</p>
							</div>
							<div className="bwinput">
											<input type="text" placeholder="Enter amount..."/>
											<h1>Fcoins</h1>

											</div>
											<div className="waamount">
													<div className="wbutton">
														<button>Withdraw</button>
													</div>
													<div className="abutton">
														<button>Add amount</button>
													</div>
											</div>
							
							<div className="cointransactions">
								<table>

									<tr>
										<th>Timestamp</th>
										<th>Amount</th>
										<th>State</th>
									</tr>

									<tr>
										<td>text</td>
										<td>Maria Anders</td>
										<td>Germany</td>
									</tr>

									<tr>
										<td>Centro</td>
										<td>Francisco Chang</td>
										<td>Mexico</td>
									</tr>
									
									<tr>
										<td>text</td>
										<td>Maria Anders</td>
										<td>Germany</td>
									</tr>

								</table>
							</div>
						</div>
			</div>
		</div>
			</>
	</div>
  )
}

export default Wallet