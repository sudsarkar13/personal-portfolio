import React from "react";

const curryear = new Date().getFullYear();

const Footer = () => {
	return (
		<div>
			<div className='footer'>
				<p>Copyright © {curryear}, Sudeepta Sarkar, All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
