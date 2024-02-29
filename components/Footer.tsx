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
						<p className='footer-address-p'>
							P.C. Sarkar Lane, <br /> Arunodaya Nagar, Cuttack, Odisha, Pincode
							- 753012 <br /> PS.: Badambadi
						</p>
					</div>
				</div>
				<div className='footer-2'>
					<div className='footer-3'>
						<DevicePhoneMobileIcon className='footer-icon' />
					</div>
					<div>
						<h1 className='footer-address'>Phone</h1>
						<p className='footer-address-p'>
							+91<span className='p-[2px]'></span>7504614781 <br />
							+91<span className='p-[2px]'></span>7809518625
						</p>
					</div>
				</div>
				<div className='footer-2'>
					<div className='footer-3'>
						<EnvelopeIcon className='footer-icon' />
					</div>
					<div>
						<h1 className='footer-address'>Email me @</h1>
						<p className='footer-address-p'>
							sudeeptasarkarbiz@gmail.com <br />
							sudsarkar13@gmail.com
						</p>
					</div>
				</div>
			</div>
			<div className='footer-4'>
				<div className='footer-txt'>
					<p>Copyright © {curryear}, Sudeepta Sarkar, All rights reserved.</p>
				</div>
				<div className='footer-5 hidden'>
					<p className='footer-txt-p'>Terms & Conditions</p>
					<p className='footer-txt-p'>Privacy Policy</p>
					<p className='footer-txt-p'>Sitemap</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
