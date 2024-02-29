import {
	DevicePhoneMobileIcon,
	EnvelopeIcon,
	MapIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const curryear = new Date().getFullYear();

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-1'>
				<div className='footer-2'>
					<div className='footer-3'>
						<MapIcon className='footer-icon' />
					</div>
					<div>
						<h1 className='footer-address'>Address</h1>
						<p className='footer-address-p'>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
				<div className='footer-2'>
					<div className='footer-3'>
						<DevicePhoneMobileIcon className='footer-icon' />
					</div>
					<div>
						<h1 className='footer-address'>Phone</h1>
						{/* <p className='footer-address-p'>+91<span className="p-[2px]"></span>7504614781</p> */}
						<p className='footer-address-p'>
							+91<span className='p-[2px]'></span>75XXXXXXX1 <br />
							+91<span className='p-[2px]'></span>78XXXXXXX5
						</p>
					</div>
				</div>
				<div className='footer-2'>
					<div className='footer-3'>
						<EnvelopeIcon className='footer-icon' />
					</div>
					<div>
						<h1 className='footer-address'>Email me @</h1>
						{/* <p className='footer-address-p'>+91<span className="p-[2px]"></span>7504614781</p> */}
						<p className='footer-address-p'>
							example.co.in <br />
							example@example.com
						</p>
					</div>
				</div>
			</div>
			<div className='footer-4'>
				<div className='footer-txt'>
					<p>Copyright © {curryear}, Sudeepta Sarkar, All rights reserved.</p>
				</div>
				<div className="footer-5">
					<p className="footer-txt-p">Terms & Conditions</p>
					<p className="footer-txt-p">Privacy Policy</p>
					<p className="footer-txt-p">Sitemap</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
