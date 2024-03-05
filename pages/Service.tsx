import React, { useState } from "react";
import Head from "next/head";
import { Nav, MobileNav, Footer } from "@/components";
import { Services, Skills } from "@/components/webpages";

const Service = () => {
	const [nav, setNav] = useState(false);
	const openNav = () => setNav(true);
	const closeNav = () => setNav(false);

	return (
		<div className='overflow-x-hidden'>
			<Head>
				<title>Services</title>
			</Head>
			<MobileNav nav={nav} closeNav={closeNav} />
			<Nav openNav={openNav} />
			<Services />
			<Skills />
			<Footer />
		</div>
	);
};

export default Service;
